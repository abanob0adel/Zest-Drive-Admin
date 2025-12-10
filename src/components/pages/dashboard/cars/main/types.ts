export type CarCategory =
  | "sedan"
  | "suv"
  | "hatchback"
  | "coupe"
  | "crossover"
  | "van"
  | "pickup"
  | "convertible"
  | "wagon";

export type CarAvailability = "available" | "upcoming" | "discontinued";

export interface CarVariant {
  name_en: string;
  name_ar: string;
  year: number;
  price?: number;
  price_range?: {
    min?: number;
    max?: number;
  };
  availability: CarAvailability;
  release_date?: string;
  features?: string[];
}

export interface EngineSpecs {
  type?: string;
  displacement?: number;
  cylinders?: number;
  horsepower?: number;
  torque?: number;
  fuel_system?: string;
}

export interface TransmissionSpecs {
  type?: string;
  gears?: number;
}

export interface PerformanceSpecs {
  top_speed?: number;
  acceleration_0_100?: number;
  fuel_consumption?: {
    city?: number;
    highway?: number;
    combined?: number;
  };
}

export interface DimensionsSpecs {
  length?: number;
  width?: number;
  height?: number;
  wheelbase?: number;
  ground_clearance?: number;
  cargo_capacity?: number;
  fuel_tank_capacity?: number;
}

export interface WeightSpecs {
  curb_weight?: number;
  gross_weight?: number;
}

export interface WheelsSpecs {
  size?: string;
  type?: string;
}

export interface CapacitySpecs {
  seating?: number;
  doors?: number;
}

export interface Specifications {
  engine?: EngineSpecs;
  transmission?: TransmissionSpecs;
  performance?: PerformanceSpecs;
  dimensions?: DimensionsSpecs;
  weight?: WeightSpecs;
  wheels?: WheelsSpecs;
  capacity?: CapacitySpecs;
}

export interface SafetyFeatures {
  airbags?: number;
  abs?: boolean;
  stability_control?: boolean;
  traction_control?: boolean;
  parking_sensors?: boolean;
  rear_camera?: boolean;
  blind_spot_monitor?: boolean;
  lane_departure_warning?: boolean;
  cruise_control?: boolean;
  adaptive_cruise_control?: boolean;
  collision_warning?: boolean;
  automatic_emergency_braking?: boolean;
}

export interface ComfortFeatures {
  air_conditioning?: string;
  sunroof?: boolean;
  panoramic_roof?: boolean;
  leather_seats?: boolean;
  power_seats?: boolean;
  heated_seats?: boolean;
  ventilated_seats?: boolean;
  push_start_button?: boolean;
  keyless_entry?: boolean;
  cruise_control?: boolean;
  infotainment_screen?: string;
  sound_system?: string;
  speakers_count?: number;
  usb_ports?: number;
  wireless_charging?: boolean;
}

export interface TechnologyFeatures {
  apple_carplay?: boolean;
  android_auto?: boolean;
  bluetooth?: boolean;
  navigation_system?: boolean;
  digital_cluster?: boolean;
  head_up_display?: boolean;
  ambient_lighting?: boolean;
  driver_assistance?: string[];
}

export interface ExteriorFeatures {
  led_headlights?: boolean;
  led_daytime_running_lights?: boolean;
  fog_lights?: boolean;
  power_mirrors?: boolean;
  heated_mirrors?: boolean;
  auto_folding_mirrors?: boolean;
  rain_sensing_wipers?: boolean;
  roof_rails?: boolean;
  alloy_wheels?: boolean;
}

export interface Warranty {
  years?: number;
  kilometers?: number;
  description_en?: string;
  description_ar?: string;
}

export interface CarImages {
  exterior?: string[];
  interior?: string[];
  thumbnail?: string;
  featured_image?: string;
}

export interface Brand {
  _id: string;
  name_en: string;
  name_ar: string;
  slug: string;
  logo?: string;
  country?: string;
}

export interface Car {
  _id: string;
  slug: string;
  brand: Brand;
  name_en: string;
  name_ar: string;
  category: CarCategory;
  body_type?: string;

  origin_country?: string;
  assembly_country?: string;

  description_en?: string;
  description_ar?: string;

  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];

  images?: CarImages;
  video_url?: string;

  variants?: CarVariant[];
  specifications?: Specifications;
  safety_features?: SafetyFeatures;
  comfort_features?: ComfortFeatures;
  technology_features?: TechnologyFeatures;
  exterior_features?: ExteriorFeatures;
  warranty?: Warranty;

  is_active: boolean;
  is_featured: boolean;

  views_count: number;
  createdAt: string;
  updatedAt: string;
}

export interface CarListResponse {
  cars: Car[];
  pagination: CarPagination;
}
export interface CarPagination {
  total: number;
  page: number;
  pages: number;
  limit: number;
}
export interface CarDetailsResponse {
  car: Car;
}
