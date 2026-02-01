"use client";

import { useState, FormEvent } from "react";
import { useContactForm } from "../hooks/useContactForm";
import { FormMessage } from "./FormMessage";
import { FormInput, FormTextarea, FormCheckbox } from "./FormInput";
import { Button } from "./Button";

export type FormType = "homepage" | "contact" | "about" | "specialties" | "playbook";

interface ContactFormProps {
  formType: FormType;
  showNewsletter?: boolean;
  showPhone?: boolean;
  showCompany?: boolean;
  accentColor?: "blue" | "burgundy";
  buttonVariant?: "primary" | "burgundy" | "burgundy-gradient";
  buttonText?: string;
  successMessage?: string;
  messageRequired?: boolean;
  messageRows?: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  newsletter?: boolean;
}

export function ContactForm({
  formType,
  showNewsletter = false,
  showPhone = false,
  showCompany = false,
  accentColor = "blue",
  buttonVariant = "primary",
  buttonText = "Submit",
  successMessage = "Thank you! We'll be in touch soon.",
  messageRequired = true,
  messageRows = 5,
}: ContactFormProps) {
  const { submitForm, isSubmitting, isSuccess, error, reset } = useContactForm();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
    company: "",
    newsletter: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm({
      ...formData,
      formType,
    });

    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phone: "",
        company: "",
        newsletter: false,
      });
      setTimeout(reset, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  return (
    <>
      {isSuccess && <FormMessage type="success" message={successMessage} />}
      {error && <FormMessage type="error" message={error} />}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name section */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Name
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              accentColor={accentColor}
            />
            <FormInput
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              accentColor={accentColor}
            />
          </div>
        </div>

        {/* Email field */}
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          accentColor={accentColor}
        />

        {/* Newsletter checkbox */}
        {showNewsletter && (
          <FormCheckbox
            id={`newsletter-${formType}`}
            name="newsletter"
            label="Sign up for news and updates"
            checked={formData.newsletter}
            onChange={handleChange}
            disabled={isSubmitting}
            accentColor={accentColor}
          />
        )}

        {/* Phone field */}
        {showPhone && (
          <FormInput
            type="tel"
            name="phone"
            label="Phone"
            value={formData.phone || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            accentColor={accentColor}
          />
        )}

        {/* Company field */}
        {showCompany && (
          <FormInput
            name="company"
            label="Company Name"
            value={formData.company || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            accentColor={accentColor}
          />
        )}

        {/* Message field */}
        <FormTextarea
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          required={messageRequired}
          rows={messageRows}
          accentColor={accentColor}
        />

        {/* Submit button */}
        <div>
          <Button
            type="submit"
            variant={buttonVariant}
            size="large"
            fullWidth={buttonVariant === "burgundy-gradient"}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : buttonText}
          </Button>
        </div>
      </form>
    </>
  );
}
