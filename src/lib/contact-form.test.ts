import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  formatContactEmail,
  mailtoForContact,
  parseContactInput,
} from "./contact-form";

const valid = {
  firstName: "  Anna  ",
  lastName: "Meier",
  email: "Anna.Meier@Example.com",
  phone: "079 000 00 00",
  topic: "Heimberatung",
  message: "Wir möchten einen Termin für ein Naturbett.",
};

describe("parseContactInput", () => {
  it("accepts a complete enquiry and trims fields", () => {
    const parsed = parseContactInput(valid);
    assert.equal(parsed.ok, true);
    if (!parsed.ok || parsed.spam) throw new Error("expected a real payload");
    assert.equal(parsed.value.firstName, "Anna");
    assert.equal(parsed.value.email, "anna.meier@example.com");
    assert.equal(parsed.value.topic, "Heimberatung");
  });

  it("treats a filled honeypot as spam instead of sending", () => {
    const parsed = parseContactInput({ ...valid, website: "http://spam.test" });
    assert.deepEqual(parsed, { ok: true, spam: true });
  });

  it("rejects a missing name", () => {
    const parsed = parseContactInput({ ...valid, firstName: "" });
    assert.equal(parsed.ok, false);
  });

  it("rejects an invalid email", () => {
    const parsed = parseContactInput({ ...valid, email: "not-an-email" });
    assert.equal(parsed.ok, false);
  });

  it("rejects a topic that is not on the form", () => {
    const parsed = parseContactInput({ ...valid, topic: "Casino" });
    assert.equal(parsed.ok, false);
  });

  it("rejects a too-short message", () => {
    const parsed = parseContactInput({ ...valid, message: "Hi" });
    assert.equal(parsed.ok, false);
  });
});

describe("formatContactEmail", () => {
  it("addresses the live Naturland inbox in the mailto fallback", () => {
    const parsed = parseContactInput(valid);
    if (!parsed.ok || parsed.spam) throw new Error("expected a real payload");
    const href = mailtoForContact("zwiker@natur-land.ch", parsed.value);
    assert.match(href, /^mailto:zwiker@natur-land\.ch\?/);
    const { subject } = formatContactEmail(parsed.value);
    assert.match(subject, /natur-land\.ch/);
    assert.match(subject, /Heimberatung/);
  });
});
