import dailyImg from "@/assets/tour-daily.jpg";
import privateImg from "@/assets/tour-private.jpg";
import sunsetImg from "@/assets/tour-sunset.jpg";

export type Tour = {
  id: string;
  title: string;
  category: "daily" | "hourly" | "sunset";
  categoryLabel: string;
  duration: string;
  route: string;
  description: string;
  image: string;
  featured?: boolean;
  includes: string[];
  highlights: string[];
  stops?: string[];
};

export const tours: Tour[] = [
  {
    id: "klasik-gunluk-tur",
    title: "tours.klasik.title",
    category: "daily",
    categoryLabel: "tours.category.daily",
    duration: "tours.klasik.duration",
    route: "tours.klasik.route",
    description: "tours.klasik.description",
    image: dailyImg,
    featured: true,
    includes: [
      "tours.klasik.inc.1",
      "tours.klasik.inc.2",
      "tours.klasik.inc.3",
      "tours.klasik.inc.4",
      "tours.klasik.inc.5",
    ],
    highlights: ["tours.klasik.hl.1", "tours.klasik.hl.2", "tours.klasik.hl.3"],
    stops: [
      "tours.klasik.stop.1",
      "tours.klasik.stop.2",
      "tours.klasik.stop.3",
      "tours.klasik.stop.4",
      "tours.klasik.stop.5",
      "tours.klasik.stop.6",
      "tours.klasik.stop.7",
      "tours.klasik.stop.8",
    ],
  },
  {
    id: "ozel-yat-saatlik",
    title: "tours.private.title",
    category: "hourly",
    categoryLabel: "tours.category.hourly",
    duration: "tours.private.duration",
    route: "tours.private.route",
    description: "tours.private.description",
    image: privateImg,
    featured: true,
    includes: [
      "tours.private.inc.1",
      "tours.private.inc.2",
      "tours.private.inc.3",
      "tours.private.inc.4",
    ],
    highlights: ["tours.private.hl.1", "tours.private.hl.2", "tours.private.hl.3"],
    stops: [
      "tours.private.stop.1",
      "tours.private.stop.2",
      "tours.private.stop.3",
      "tours.private.stop.4",
      "tours.private.stop.5",
      "tours.private.stop.6",
      "tours.private.stop.7",
      "tours.private.stop.8",
      "tours.private.stop.9",
      "tours.private.stop.10",
      "tours.private.stop.11",
      "tours.private.stop.12",
      "tours.private.stop.13",
      "tours.private.stop.14",
      "tours.private.stop.15",
    ],
  },
  {
    id: "gun-batimi-turu",
    title: "tours.sunset.title",
    category: "sunset",
    categoryLabel: "tours.category.sunset",
    duration: "tours.sunset.duration",
    route: "tours.sunset.route",
    description: "tours.sunset.description",
    image: sunsetImg,
    featured: true,
    includes: [
      "tours.sunset.inc.1",
      "tours.sunset.inc.2",
      "tours.sunset.inc.3",
      "tours.sunset.inc.4",
    ],
    highlights: ["tours.sunset.hl.1", "tours.sunset.hl.2", "tours.sunset.hl.3"],
    stops: ["tours.sunset.stop.1", "tours.sunset.stop.2", "tours.sunset.stop.3"],
  },
];

export const getTour = (id: string) => tours.find((t) => t.id === id);
