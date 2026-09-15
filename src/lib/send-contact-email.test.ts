import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { NoServerMailerError, sendContactEmail } from "./send-contact-email";
import { formSubmitUrl, sendContactViaFormSubmit } from "./formsubmit-contact";

const payload = {
  firstName: "Anna",
  lastName: "Meier",
  email: "anna.meier@example.com",
  phone: "079 000 00 00",
  topic: "Heimberatung",
  message: "Wir möchten einen Termin für ein Naturbett.",
};

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO_EMAIL;
});

describe("sendContactEmail", () => {
  it("does not silently succeed without a mailer", async () => {
    await assert.rejects(sendContactEmail(payload), NoServerMailerError);
  });

  it("sends through Resend to the address shown on the site", async () => {
    process.env.RESEND_API_KEY = "re_test";
    const posts: Array<{ url: string; body: { to?: string[] } }> = [];
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      posts.push({
        url: String(input),
        body: JSON.parse(String(init?.body)) as { to?: string[] },
      });
      return new Response(JSON.stringify({ id: "ok" }), { status: 200 });
    }) as typeof fetch;

    await sendContactEmail(payload);
    assert.equal(posts[0]?.url, "https://api.resend.com/emails");
    assert.deepEqual(posts[0]?.body.to, ["zwiker@natur-land.ch"]);
  });
});

describe("sendContactViaFormSubmit", () => {
  it("posts to FormSubmit for the displayed inbox", async () => {
    assert.equal(
      formSubmitUrl("zwiker@natur-land.ch"),
      "https://formsubmit.co/ajax/zwiker%40natur-land.ch",
    );

    const urls: string[] = [];
    globalThis.fetch = (async (input: RequestInfo | URL) => {
      urls.push(String(input));
      return new Response(JSON.stringify({ success: "true" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch;

    await sendContactViaFormSubmit("zwiker@natur-land.ch", payload);
    assert.deepEqual(urls, [
      "https://formsubmit.co/ajax/zwiker%40natur-land.ch",
    ]);
  });
});
