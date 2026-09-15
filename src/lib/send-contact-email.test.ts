import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { sendContactEmail } from "./send-contact-email";

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
  it("delivers to the address shown on the site", async () => {
    const urls: string[] = [];
    globalThis.fetch = (async (input: RequestInfo | URL) => {
      urls.push(String(input));
      return new Response(JSON.stringify({ success: "true" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch;

    await sendContactEmail(payload);
    assert.equal(urls.length, 1);
    assert.match(urls[0], /formsubmit\.co\/ajax\/zwiker%40natur-land\.ch$/);
  });
});
