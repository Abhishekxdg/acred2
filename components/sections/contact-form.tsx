"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const initial: ContactState = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="gold" size="lg" disabled={pending}>
      {pending ? "Sending…" : "Send enquiry"}
    </Button>
  );
}

export function ContactForm() {
  const [state, action] = useFormState(submitContact, initial);

  return (
    <form action={action} className="space-y-8 sm:space-y-10">
      <div className="grid gap-6 md:grid-cols-2 sm:gap-10">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="project">Project type (optional)</Label>
        <Input id="project" name="project" placeholder="Residential · Commercial · Advisory · …" />
      </div>

      <div>
        <Label htmlFor="message">Tell us about the site or brief</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Location, scale, and what you're trying to solve."
        />
      </div>

      {state && (
        <p
          className={cn(
            "text-sm",
            state.ok ? "text-gold" : "text-red-400",
          )}
          role="status"
        >
          {state.message}
        </p>
      )}

      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
