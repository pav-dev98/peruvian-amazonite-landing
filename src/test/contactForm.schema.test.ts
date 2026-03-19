import { formSchema } from "../schemas/contactForm.schema";
import { expect, test ,describe} from "vitest";

const validData = {
  fullName: "John Smith",
  companyName: "Smith Minerals Ltd.",
  email: "john@company.com",
  phone: "+1 555 123 4567",
  country: "chile",
  volume: "1 - 5 tons",
  intendedUse: "jewelry manufacturing",
  interestedGrades: ["AAA"],
  message: "Test message",
};

describe("formSchema", () => {
  test("acepta datos válidos", () => {
    const result = formSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  test("rechaza fullName menor a 2 caracteres", () => {
    const result = formSchema.safeParse({ ...validData, fullName: "J" });
    expect(result.success).toBe(false);
  });

  test("rechaza email inválido", () => {
    const result = formSchema.safeParse({ ...validData, email: "noesemail" });
    expect(result.success).toBe(false);
  });

  test("rechaza grades vacío", () => {
    const result = formSchema.safeParse({ ...validData, interestedGrades: [] });
    expect(result.success).toBe(false);
  });

  test("phone es opcional", () => {
    const { phone, ...sinPhone } = validData;
    const result = formSchema.safeParse(sinPhone);
    expect(result.success).toBe(true);
  });

  test("message es opcional", () => {
    const { message, ...sinMessage } = validData;
    const result = formSchema.safeParse(sinMessage);
    expect(result.success).toBe(true);
  });
});