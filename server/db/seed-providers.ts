import "dotenv/config";
import { db } from "./index";
import { users } from "./schema";
import { hashPassword } from "../utils/auth";

/**
 * Seed script to add 50 additional medical providers
 */

// Sample data arrays
const firstNames = [
  "Sophia", "Jackson", "Olivia", "Liam", "Emma", "Noah", "Ava", "Ethan",
  "Isabella", "Lucas", "Mia", "Mason", "Charlotte", "Logan", "Amelia", "Oliver",
  "Harper", "Elijah", "Evelyn", "Aiden", "Abigail", "Carter", "Emily", "Wyatt",
  "Elizabeth", "Jayden", "Sofia", "John", "Avery", "Jack", "Ella", "Luke",
  "Scarlett", "Dylan", "Grace", "Grayson", "Chloe", "Levi", "Victoria", "Isaac",
  "Riley", "Gabriel", "Aria", "Julian", "Lily", "Mateo", "Aubrey", "Anthony",
  "Zoey", "Jaxon"
];

const lastNames = [
  "Chen", "Patel", "Kim", "Shah", "Wong", "Singh", "Ali", "Kumar",
  "Rossi", "Murphy", "O'Brien", "Schmidt", "Kowalski", "Hansen", "Jensen", "Larsen",
  "Petrov", "Ivanov", "Gonzales", "Fernandez", "Gutierrez", "Diaz", "Cruz", "Ramos",
  "Castillo", "Mendoza", "Morales", "Ortiz", "Jimenez", "Vargas", "Herrera", "Medina",
  "Aguilar", "Vega", "Soto", "Delgado", "Pena", "Rios", "Alonso", "Navarro",
  "Dominguez", "Gil", "Guerrero", "Mendez", "Santos", "Iglesias", "Serrano", "Molina",
  "Velasquez", "Nunez"
];

const medicalPractices = [
  "Advanced Spine Care", "Elite Sports Medicine", "Premier Pain Clinic", "Integrated Health Partners",
  "Comprehensive Rehab Center", "Precision Orthopedics", "Wellness Medical Associates", "Complete Care Clinic",
  "Progressive Physical Therapy", "Expert Neurology Group", "Total Health Solutions", "Modern Medicine Center",
  "Optimal Care Associates", "Peak Performance Health", "Superior Medical Practice", "Quality Life Clinic",
  "Healing Hands Medical", "Professional Health Center", "Prime Wellness Group", "Trusted Care Partners",
  "Advanced Recovery Clinic", "First Choice Medical", "Better Health Associates", "Excellence in Care",
  "Midwest Medical Center", "Atlantic Health Group", "Pacific Wellness Clinic", "Northern Care Associates"
];

const professionalTitles = [
  "MD - Orthopedic Surgeon", "MD - Neurologist", "MD - Physical Medicine & Rehab", "DC - Chiropractor",
  "PT - Physical Therapist", "MD - Pain Management", "MD - Radiologist", "NP - Nurse Practitioner",
  "PA - Physician Assistant", "DO - Osteopathic Physician", "MD - Emergency Medicine", "MD - Sports Medicine",
  "RN - Case Manager", "MD - Psychiatrist", "MD - Internal Medicine", "DC - Sports Chiropractor",
  "MD - Anesthesiology", "PT - Sports Physical Therapy", "OT - Occupational Therapist", "MD - Rheumatology"
];

const states = [
  "CA", "TX", "FL", "NY", "PA", "IL", "OH", "GA", "NC", "MI",
  "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI",
  "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT"
];

const pricingPlans = ["provider-free", "provider-basic", "provider-premium"];

// Helper functions
function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomStates(count: number): string[] {
  const selected = new Set<string>();
  while (selected.size < count) {
    selected.add(randomItem(states));
  }
  return Array.from(selected);
}

function generateLicenseNumber(state: string): string {
  return `${state}-${randomInt(10000, 99999)}`;
}

async function seedProviders() {
  console.log("🌱 Adding 50 additional providers...\n");

  const usersToInsert = [];
  const passwordHash = await hashPassword("Password123!"); // Same password for all test users

  // Generate 50 providers
  for (let i = 0; i < 50; i++) {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.newprovider${i}@example.com`;
    const statesLicensed = randomStates(randomInt(1, 4));

    usersToInsert.push({
      email,
      passwordHash,
      fullName: `Dr. ${firstName} ${lastName}`,
      userType: "provider" as const,
      phone: `(${randomInt(200, 999)}) ${randomInt(200, 999)}-${randomInt(1000, 9999)}`,
      // Provider-specific fields
      practiceName: randomItem(medicalPractices),
      professionalTitle: randomItem(professionalTitles),
      licenseNumber: generateLicenseNumber(statesLicensed[0]),
      statesLicensed: JSON.stringify(statesLicensed),
      yearsExperience: randomInt(2, 35),
      pricingPlan: randomItem(pricingPlans),
      // Null attorney fields
      firmName: null,
      barNumber: null,
      statesOfPractice: null,
      firmSize: null,
    });
  }

  // Insert all providers
  console.log("📥 Inserting 50 providers into database...");

  try {
    const inserted = await db.insert(users).values(usersToInsert).returning();

    console.log(`✅ Successfully inserted ${inserted.length} providers!\n`);

    // Get total counts
    const allUsers = await db.select().from(users);
    const attorneys = allUsers.filter(u => u.userType === "attorney").length;
    const providers = allUsers.filter(u => u.userType === "provider").length;

    console.log("📊 Database Statistics:");
    console.log(`   - Attorneys: ${attorneys}`);
    console.log(`   - Providers: ${providers}`);
    console.log(`   - Total Users: ${allUsers.length}\n`);

    console.log("🔑 Test Credentials:");
    console.log("   Email: Any provider email (e.g., sophia.chen.newprovider0@example.com)");
    console.log("   Password: Password123!\n");

    console.log("🎯 View data:");
    console.log("   - Drizzle Studio: https://local.drizzle.studio");
    console.log("   - Or run: docker exec mednexus-postgres psql -U postgres -d mednexus -c 'SELECT COUNT(*) FROM users;'\n");

  } catch (error) {
    console.error("❌ Error inserting providers:", error);
    process.exit(1);
  }

  process.exit(0);
}

// Run seed
seedProviders();
