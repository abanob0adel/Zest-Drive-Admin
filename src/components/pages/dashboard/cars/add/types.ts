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

export type Availability = "available" | "upcoming" | "discontinued";

export interface PriceRange {
  min?: string;
  max?: string;
}

export interface CarVariant {
  name_ar: string;
  name_en: string;
  year: number;
  price?: string;
  price_range?: PriceRange;
  availability?: Availability;
  release_date?: string;
  features?: string[];
}

export interface EngineSpecs {
  type?: string;
  displacement?: string;
  cylinders?: string;
  horsepower?: string;
  torque?: string;
  fuel_system?: string;
}

export interface TransmissionSpecs {
  type?: string;
  gears?: string;
}

export interface PerformanceSpecs {
  top_speed?: string;
  acceleration_0_100?: string;
  fuel_consumption?: {
    city?: string;
    highway?: string;
    combined?: string;
  };
}

export interface DimensionsSpecs {
  length?: string;
  width?: string;
  height?: string;
  wheelbase?: string;
  ground_clearance?: string;
  cargo_capacity?: string;
  fuel_tank_capacity?: string;
}

export interface WeightSpecs {
  curb_weight?: string;
  gross_weight?: string;
}

export interface WheelsSpecs {
  size?: string;
  type?: string;
}

export interface CapacitySpecs {
  seating?: string;
  doors?: string;
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
  airbags?: string;
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
  speakers_count?: string;
  usb_ports?: string;
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
  years?: string;
  kilometers?: string;
  description_en?: string;
  description_ar?: string;
}

export interface AddCarTypes {
  brand: string;
  model_name_ar: string;
  model_name_en: string;
  category: CarCategory;
  body_type?: string;

  origin_country?: string;
  assembly_country?: string;

  description_ar?: string;
  description_en?: string;

  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;

  variants?: CarVariant[];

  specifications?: Specifications;

  safety_features?: SafetyFeatures;
  comfort_features?: ComfortFeatures;
  technology_features?: TechnologyFeatures;
  exterior_features?: ExteriorFeatures;

  warranty?: Warranty;

  thumbnail?: FileList;
  featured_image?: FileList;
  exterior_images?: FileList;
  interior_images?: FileList;

  video_url?: string;

  is_active?: boolean;
  is_featured?: boolean;
}
