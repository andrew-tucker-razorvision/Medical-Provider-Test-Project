import { pgTable, uuid, varchar, timestamp, text, integer } from 'drizzle-orm/pg-core';

/**
 * Users table schema
 * Stores all user account information for both attorneys and medical providers
 */
export const users = pgTable('users', {
  // Primary key and auth fields
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),

  // Common profile fields
  fullName: varchar('full_name', { length: 255 }).notNull(),
  userType: varchar('user_type', { length: 50 }).notNull(), // 'attorney' or 'provider'
  phone: varchar('phone', { length: 50 }),

  // Attorney-specific fields
  firmName: varchar('firm_name', { length: 255 }),
  barNumber: varchar('bar_number', { length: 100 }),
  statesOfPractice: text('states_of_practice'), // JSON array of states
  firmSize: varchar('firm_size', { length: 50 }), // Solo / 2-10 / 11-50 / 51+

  // Provider-specific fields
  practiceName: varchar('practice_name', { length: 255 }),
  professionalTitle: varchar('professional_title', { length: 100 }), // MD / DO / DC / PT / RN / NP / PA / Other
  licenseNumber: varchar('license_number', { length: 100 }),
  statesLicensed: text('states_licensed'), // JSON array of states
  yearsExperience: integer('years_experience'),

  // Pricing plan (for both user types)
  pricingPlan: varchar('pricing_plan', { length: 50 }), // starter / professional / enterprise / individual / practice / group

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
