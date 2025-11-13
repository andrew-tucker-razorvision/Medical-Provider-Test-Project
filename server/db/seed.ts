import "dotenv/config";
import { db } from "./index";
import { users } from "./schema";
import { hashPassword } from "../utils/auth";

/**
 * Seed script to populate the database with 100 sample users
 * - 50 attorneys with realistic law firm data
 * - 50 medical providers with realistic practice data
 */

// Sample data arrays
const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda",
  "William", "Barbara", "David", "Elizabeth", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Christopher", "Karen", "Charles", "Nancy", "Daniel", "Lisa",
  "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley",
  "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle",
  "Kenneth", "Carol", "Kevin", "Amanda", "Brian", "Dorothy", "George", "Melissa",
  "Timothy", "Deborah", "Ronald", "Stephanie"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas",
  "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White",
  "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young",
  "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
  "Carter", "Roberts"
];

const lawFirms = [
  "Smith & Associates", "Johnson Legal Group", "Williams Law Firm", "Brown & Partners",
  "Garcia Legal Services", "Miller Law Office", "Davis & Associates", "Rodriguez Law Group",
  "Martinez Legal", "Hernandez & Partners", "Lopez Law Firm", "Wilson Legal Services",
  "Anderson & Associates", "Thomas Law Group", "Taylor Legal", "Moore & Partners",
  "Jackson Law Office", "Martin Legal Group", "Lee & Associates", "Thompson Law Firm"
];

const medicalPractices = [
  "City Medical Center", "Regional Health Clinic", "Advanced Care Associates", "Prime Health Partners",
  "Metro Medical Group", "Coastal Health Center", "Summit Medical Practice", "Valley Care Clinic",
  "Riverside Health Associates", "Mountain View Medical", "Lakeside Family Practice", "Harbor Health Center",
  "Sunrise Medical Group", "Sunset Care Clinic", "Central Health Associates", "North Point Medical",
  "South Bay Health Center", "East Side Family Practice", "West End Medical Group", "Downtown Health Clinic"
];

const cities = [
  "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas",
  "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Indianapolis", "Charlotte", "San Francisco",
  "Seattle", "Denver", "Boston", "Portland", "Nashville", "Oklahoma City", "Las Vegas", "Detroit"
];

const states = [
  "CA", "TX", "FL", "NY", "PA", "IL", "OH", "GA", "NC", "MI",
  "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI"
];

const professionalTitles = [
  "MD - Orthopedic Surgeon", "MD - Neurologist", "MD - Physical Medicine", "DC - Chiropractor",
  "PT - Physical Therapist", "MD - Pain Management", "MD - Radiologist", "NP - Nurse Practitioner",
  "PA - Physician Assistant", "DO - Osteopathic Physician", "MD - Emergency Medicine", "MD - Sports Medicine",
  "RN - Registered Nurse", "MD - Psychiatrist", "MD - Internal Medicine", "DC - Sports Chiropractor"
];

const firmSizes = ["Solo", "2-10", "11-50", "51+"];
const pricingPlans = ["attorney-starter", "attorney-professional", "attorney-enterprise", "provider-free", "provider-basic", "provider-premium"];

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

function generateBarNumber(state: string): string {
  return `${state}${randomInt(100000, 999999)}`;
}

function generateLicenseNumber(state: string): string {
  return `${state}-${randomInt(10000, 99999)}`;
}

async function seed() {
  console.log("🌱 Starting database seed...\n");

  const usersToInsert = [];
  const passwordHash = await hashPassword("Password123!"); // Same password for all test users

  // Generate 50 attorneys
  console.log("Creating 50 attorneys...");
  for (let i = 0; i < 50; i++) {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.attorney${i}@example.com`;
    const statesOfPractice = randomStates(randomInt(1, 3));

    usersToInsert.push({
      email,
      passwordHash,
      fullName: `${firstName} ${lastName}`,
      userType: "attorney" as const,
      phone: `(${randomInt(200, 999)}) ${randomInt(200, 999)}-${randomInt(1000, 9999)}`,
      // Attorney-specific fields
      firmName: randomItem(lawFirms),
      barNumber: generateBarNumber(statesOfPractice[0]),
      statesOfPractice: JSON.stringify(statesOfPractice),
      firmSize: randomItem(firmSizes),
      pricingPlan: randomItem(["attorney-starter", "attorney-professional", "attorney-enterprise"]),
      // Null provider fields
      practiceName: null,
      professionalTitle: null,
      licenseNumber: null,
      statesLicensed: null,
      yearsExperience: null,
    });
  }

  // Generate 50 providers
  console.log("Creating 50 medical providers...");
  for (let i = 0; i < 50; i++) {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.provider${i}@example.com`;
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
      pricingPlan: randomItem(["provider-free", "provider-basic", "provider-premium"]),
      // Null attorney fields
      firmName: null,
      barNumber: null,
      statesOfPractice: null,
      firmSize: null,
    });
  }

  // Insert all users
  console.log("\n📥 Inserting 100 users into database...");

  try {
    const inserted = await db.insert(users).values(usersToInsert).returning();

    console.log(`✅ Successfully inserted ${inserted.length} users!\n`);

    // Statistics
    const attorneys = inserted.filter(u => u.userType === "attorney").length;
    const providers = inserted.filter(u => u.userType === "provider").length;

    console.log("📊 Statistics:");
    console.log(`   - Attorneys: ${attorneys}`);
    console.log(`   - Providers: ${providers}`);
    console.log(`   - Total: ${inserted.length}\n`);

    console.log("🔑 Test Credentials:");
    console.log("   Email: Any email from the seeded users");
    console.log("   Password: Password123!\n");

    console.log("🎯 View data:");
    console.log("   - Drizzle Studio: https://local.drizzle.studio");
    console.log("   - Or run: docker exec mednexus-postgres psql -U postgres -d mednexus -c 'SELECT COUNT(*) FROM users;'\n");

  } catch (error) {
    console.error("❌ Error inserting users:", error);
    process.exit(1);
  }

  process.exit(0);
}

// Run seed
seed();
