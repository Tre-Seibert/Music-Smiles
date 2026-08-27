export type EventItem = {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registerUrl?: string;
};

/**
 * Upcoming Events — edit this list anytime. No developer needed.
 *
 * Copy an example object, fill in the fields, and save.
 * Leave the array empty to show the “coming soon” message on the site.
 *
 * date: use YYYY-MM-DD so events sort correctly (example: "2026-09-20")
 */
export const events: EventItem[] = [
  // {
  //   name: "Music Play Day",
  //   date: "2026-09-20",
  //   time: "10:00 AM – 12:00 PM",
  //   location: "Newtown, PA",
  //   description:
  //     "Sing, dance, play instruments, and enjoy music together in a welcoming, inclusive setting.",
  // },
];
