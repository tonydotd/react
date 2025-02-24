"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

function isValid(value: any) {
  return value && value.trim().length > 0;
}

export async function shareMeal(prevStae, formData) {
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const creator = formData.get("name");
  const creator_email = formData.get("email");

  if (
    !isValid(title) ||
    !isValid(summary) ||
    !isValid(instructions) ||
    !isValid(creator) ||
    !creator_email.includes("@") ||
    image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal({
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  });
  revalidatePath("/meals");
  redirect("/meals");
}
