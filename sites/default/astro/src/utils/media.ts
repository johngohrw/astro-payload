/**
 * Utility functions for extracting image URLs and metadata from Payload CMS media objects
 */

import type { Media } from "@payload-default/payload-types";

/**
 * Represents a Payload media object that may be returned from the API
 * Can be a full Media object, a number (ID), or null/undefined
 */
type PayloadMedia = Media | number | null | undefined;

/**
 * Extract the URL from a Payload media object safely
 * @param media - The media object from Payload CMS
 * @returns The URL string or undefined if media is invalid
 */
export function getImageUrl(media: PayloadMedia): string | undefined {
  if (typeof media !== "object" || media === null) {
    return undefined;
  }
  return media.url ?? undefined;
}

/**
 * Extract the alt text from a Payload media object safely
 * @param media - The media object from Payload CMS
 * @returns The alt text string or undefined if media is invalid
 */
export function getImageAlt(media: PayloadMedia): string | undefined {
  if (typeof media !== "object" || media === null) {
    return undefined;
  }
  return media.alt ?? undefined;
}

/**
 * Extract both URL and alt text from a Payload media object
 * @param media - The media object from Payload CMS
 * @returns Object containing url and alt, both potentially undefined
 */
export function getImageMeta(media: PayloadMedia): { url: string | undefined; alt: string | undefined } {
  if (typeof media !== "object" || media === null) {
    return { url: undefined, alt: undefined };
  }
  return {
    url: media.url ?? undefined,
    alt: media.alt ?? undefined,
  };
}

/**
 * Map function for extracting image URL from media items in an array
 * Useful with .map() on array fields containing media
 * @param media - The media object from Payload CMS
 * @returns The URL string or undefined
 */
export function mapImageUrl(media: PayloadMedia): string | undefined {
  return getImageUrl(media);
}

/**
 * Map function for extracting image alt text from media items in an array
 * Useful with .map() on array fields containing media
 * @param media - The media object from Payload CMS
 * @returns The alt text string or undefined
 */
export function mapImageAlt(media: PayloadMedia): string | undefined {
  return getImageAlt(media);
}
