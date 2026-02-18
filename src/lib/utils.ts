import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CASE_STUDIES } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, "-");
}

export const unslugify = (slug: string) => {
  return slug.replace(/-/g, " ");
}

export const getCaseStudyBySlug = (slug: string) => {
  return CASE_STUDIES.find((study) => slugify(study.title) === slug);
}