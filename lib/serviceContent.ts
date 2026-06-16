import { SERVICES } from "./constants";

interface ServiceContent {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: string;
  faqs: { question: string; answer: string }[];
}

const content: Record<string, Omit<ServiceContent, "slug" | "name">> = {
  "drain-cleaning": {
    title: "Drain Cleaning Los Angeles",
    metaTitle: "Drain Cleaning in Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "Fast, professional drain cleaning in Los Angeles by Richard Yazmajian. 30+ years unclogging LA drains. Call (310) 853-5200 — available 24/7.",
    h1: "Drain Cleaning in Los Angeles",
    intro: "Slow or clogged drains are one of the most common plumbing problems for LA homeowners. Richard Yazmajian has been clearing drains across Los Angeles since 1994.",
    body: "Whether it's a kitchen drain backed up with grease, a bathroom drain clogged with hair, or a main sewer line blockage causing backups throughout your home, Richards Rooter & Plumbing has the equipment and expertise to solve it fast. Richard uses professional-grade drain snakes and hydro-jetting equipment to clear blockages thoroughly — not just punch a hole through them. Call (310) 853-5200 any time, day or night.",
    faqs: [
      { question: "How do I know if I need professional drain cleaning?", answer: "If water drains slowly, you hear gurgling sounds, or you have recurring clogs, it's time to call a professional. Richard can diagnose whether it's a simple clog or a deeper sewer issue." },
      { question: "What is hydro-jetting?", answer: "Hydro-jetting uses high-pressure water to scour pipe walls, removing grease, scale, and debris. It's more thorough than snaking and works well for severe or recurring clogs." },
      { question: "How long does drain cleaning take?", answer: "Most drain cleanings take 30–90 minutes depending on severity and access. Richard will give you an honest estimate before starting any work." },
      { question: "Can drain cleaning damage old pipes?", answer: "Richard assesses pipe condition before choosing the method. In older homes with fragile pipes, he uses appropriate techniques to avoid causing damage." },
    ],
  },
  "water-heater-repair": {
    title: "Water Heater Repair Los Angeles",
    metaTitle: "Water Heater Repair Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "No hot water? Richard Yazmajian repairs all water heater brands in Los Angeles. 30+ years experience. Call (310) 853-5200, available 24/7.",
    h1: "Water Heater Repair in Los Angeles",
    intro: "A broken water heater is a major disruption. Richard Yazmajian has been diagnosing and repairing water heaters across Los Angeles since 1994 — he has seen every failure mode.",
    body: "From pilot light failures and faulty thermostats to anode rod corrosion and pressure relief valve issues, Richard diagnoses accurately and repairs efficiently. He works on all major brands including Rheem, Bradford White, A.O. Smith, Noritz, and Navien. Most water heater repairs are completed same-day. Call (310) 853-5200 for fast, honest service anywhere in Los Angeles.",
    faqs: [
      { question: "Why is my water heater making a rumbling noise?", answer: "Rumbling or popping is usually sediment buildup in the tank. Regular flushing can prevent it. Richard can flush your tank and advise on whether replacement makes more sense." },
      { question: "How long do water heaters last?", answer: "Traditional tank water heaters typically last 8–12 years. Tankless units can last 20+ years with proper maintenance. Richard can assess your unit's condition honestly." },
      { question: "Should I repair or replace my water heater?", answer: "If the unit is under 8 years old and the repair is minor, repair usually makes sense. Richard will give you a straight answer rather than pushing an unnecessary replacement." },
      { question: "What should I do if my water heater is leaking?", answer: "Turn off the water supply valve and call Richard at (310) 853-5200 immediately. A leak can cause serious water damage if not addressed quickly." },
    ],
  },
  "water-heater-installation": {
    title: "Water Heater Installation Los Angeles",
    metaTitle: "Water Heater Installation Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "Expert water heater installation in Los Angeles. Richard Yazmajian installs tank & tankless units. Licensed, bonded, 30+ years. Call (310) 853-5200.",
    h1: "Water Heater Installation in Los Angeles",
    intro: "Installing a water heater correctly requires proper sizing, code compliance, and expert craftsmanship. Richard Yazmajian has installed hundreds of water heaters across Los Angeles.",
    body: "Whether you are replacing a failed unit or upgrading to a more efficient model, Richard handles the entire installation — permits, gas or electric connections, venting, and testing. He works with all major brands and can advise on the best unit for your home size and usage patterns. All installations comply with Los Angeles city and county codes. Call (310) 853-5200 for a free estimate.",
    faqs: [
      { question: "How long does water heater installation take?", answer: "A standard tank water heater replacement typically takes 2–3 hours. Tankless installations may take 4–6 hours depending on venting and gas line requirements." },
      { question: "Do I need a permit for water heater installation in Los Angeles?", answer: "Yes, most water heater installations in LA require a permit. Richard handles all permitting as part of the installation." },
      { question: "What size water heater do I need?", answer: "Sizing depends on the number of people in your household and your usage patterns. Richard will assess your needs and recommend the right capacity." },
      { question: "Can you install a water heater in a confined space?", answer: "Yes. Richard is experienced with tight utility closets, garages, and unconventional installations throughout LA homes." },
    ],
  },
  "tankless-water-heater": {
    title: "Tankless Water Heater Los Angeles",
    metaTitle: "Tankless Water Heater Installation & Repair LA | Richards Rooter",
    metaDescription: "Tankless water heater expert in Los Angeles. Richard Yazmajian has installed them since the early 1990s. Call (310) 853-5200 for a free estimate.",
    h1: "Tankless Water Heater Installation & Repair in Los Angeles",
    intro: "Richard Yazmajian was among the first plumbers in Los Angeles to install tankless water heaters — going back to the early 1990s when the technology was just arriving in the US market.",
    body: "Tankless water heaters deliver endless hot water on demand while using 20–40% less energy than traditional tank units. Richard installs, services, and repairs all major tankless brands including Navien, Noritz, Rinnai, Rheem, and Bosch. He handles gas line sizing, venting, condensate management, and controller setup. For LA homeowners considering the switch, Richard offers honest advice on whether tankless is right for your home. Call (310) 853-5200 for a free assessment.",
    faqs: [
      { question: "Are tankless water heaters worth it in Los Angeles?", answer: "For most LA households, yes. With LA's relatively mild climate and high gas prices, the energy savings typically pay back the higher upfront cost within 5–7 years." },
      { question: "What brands does Richard install?", answer: "Richard installs Navien, Noritz, Rinnai, Rheem, and Bosch tankless units. He can advise on the best brand for your home's gas pressure and flow requirements." },
      { question: "Does a tankless water heater need a bigger gas line?", answer: "Often yes. High-output tankless units (150,000+ BTU) require a larger gas supply line than a traditional tank heater. Richard assesses and upgrades gas lines as needed." },
      { question: "How do I maintain my tankless water heater?", answer: "Annual descaling (flushing with white vinegar or a descaling solution) is the main maintenance task in LA's hard water. Richard offers maintenance service for all units he installs." },
    ],
  },
  "gas-leak-detection": {
    title: "Gas Leak Detection Los Angeles",
    metaTitle: "Gas Leak Detection Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "Suspected gas leak in LA? Call Richards Rooter 24/7 at (310) 853-5200. Richard Yazmajian detects and repairs gas leaks safely. Licensed & bonded.",
    h1: "Gas Leak Detection in Los Angeles",
    intro: "A gas leak is a life-safety emergency. Richard Yazmajian is available 24/7 for gas leak detection and repair anywhere in Los Angeles.",
    body: "If you smell sulfur or rotten eggs, hear hissing near a gas line, or see dead vegetation above a buried gas pipe, leave the building immediately and call 911 and your gas company. Once the situation is safe, call Richard at (310) 853-5200. He uses professional electronic gas detection equipment to locate leaks precisely, performs certified repairs, and coordinates with SoCalGas for service restoration. Do not attempt to find or fix a gas leak yourself.",
    faqs: [
      { question: "What should I do if I smell gas?", answer: "Do not use any electrical switches or open flames. Leave the building immediately, leaving the door open behind you. Call 911 and SoCalGas from outside. Then call Richard at (310) 853-5200." },
      { question: "How do you detect gas leaks?", answer: "Richard uses calibrated electronic gas detectors that can pinpoint leaks in walls, slabs, and buried lines — far more accurately than the soap-bubble method." },
      { question: "Can gas leaks be inside the walls?", answer: "Yes. Gas leaks frequently occur at fittings inside walls or slabs. Richard can locate and repair them with minimal demolition." },
      { question: "How much does gas leak repair cost?", answer: "Cost varies by location and extent of the leak. Richard provides an honest upfront estimate after assessment. Emergency response carries no additional premium." },
    ],
  },
  "sewer-cleaning": {
    title: "Sewer Cleaning Los Angeles",
    metaTitle: "Sewer Cleaning & Rooter Service Los Angeles | Richards Rooter",
    metaDescription: "Sewer backup in LA? Richards Rooter & Plumbing clears sewer lines fast. 30+ years in Los Angeles. Licensed plumber. Call (310) 853-5200 24/7.",
    h1: "Sewer Cleaning & Rooter Service in Los Angeles",
    intro: "Tree roots, grease buildup, and aging clay pipes are the leading causes of sewer backups in Los Angeles. Richard Yazmajian has been clearing LA sewer lines for over 30 years.",
    body: "Richards Rooter & Plumbing uses electric rooter machines and hydro-jetting equipment to clear main sewer line blockages thoroughly. Richard also offers sewer camera inspections to identify root intrusion, pipe cracks, and offset joints before they become bigger problems. If you are experiencing backups at multiple drains, gurgling toilets, or sewage odors, call (310) 853-5200 immediately.",
    faqs: [
      { question: "How do I know if my main sewer line is clogged?", answer: "Signs include backups at multiple fixtures, gurgling drains, toilets bubbling when you run water elsewhere, and sewage odors. These indicate a main line issue, not just a local clog." },
      { question: "How often should sewer lines be cleaned in LA?", answer: "Older LA homes with mature trees and clay pipes often benefit from annual or biennial cleaning. Richard can advise based on your home's specific situation." },
      { question: "Can tree roots grow into sewer lines?", answer: "Yes, and it is very common in LA's older neighborhoods. Roots infiltrate through joints and can eventually cause complete blockages or pipe collapse." },
      { question: "What is a sewer camera inspection?", answer: "Richard runs a waterproof camera through your sewer line to visually inspect its condition. It identifies root intrusion, cracks, offsets, and blockage locations." },
    ],
  },
  "water-leak-detection": {
    title: "Water Leak Detection Los Angeles",
    metaTitle: "Water Leak Detection Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "High water bills or wet spots in LA? Richard detects hidden water leaks fast. 30+ years experience. Licensed plumber. Call (310) 853-5200.",
    h1: "Water Leak Detection in Los Angeles",
    intro: "Hidden water leaks can cause tens of thousands of dollars in structural damage before they are discovered. Richard Yazmajian uses advanced techniques to find leaks fast, with minimal demolition.",
    body: "Signs of a hidden water leak include unexpectedly high water bills, warm spots on floors (slab leaks), wet or discolored walls or ceilings, and the sound of running water when all fixtures are off. Richard uses pressure testing, acoustic listening equipment, and thermal imaging techniques to pinpoint leak locations accurately. Call (310) 853-5200 for fast leak detection anywhere in Los Angeles.",
    faqs: [
      { question: "What is a slab leak?", answer: "A slab leak is a break in a water line that runs beneath your concrete foundation. They are common in older LA homes and can cause serious foundation damage if ignored." },
      { question: "How do you find a slab leak without breaking up the concrete?", answer: "Richard uses acoustic detection and pressure isolation to locate slab leaks as precisely as possible, minimizing the amount of concrete that needs to be opened." },
      { question: "Why is my water bill suddenly so high?", answer: "A spike in water usage is often the first sign of a hidden leak. Richard can perform a pressure test to determine if a leak is present before any digging or demolition." },
      { question: "How long does leak detection take?", answer: "Most leak detections are completed in 1–2 hours. If the leak is confirmed, Richard will provide a repair estimate on the spot." },
    ],
  },
  "pipe-repair": {
    title: "Pipe Repair Los Angeles",
    metaTitle: "Pipe Repair Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "Burst or corroded pipes in LA? Richard Yazmajian repairs and replaces all pipe types. Licensed plumber, 30+ years. Call (310) 853-5200 24/7.",
    h1: "Pipe Repair in Los Angeles",
    intro: "From burst pipes to corroded galvanized supply lines, Richard Yazmajian has repaired every type of pipe in LA homes over his 30+ year career.",
    body: "Los Angeles homes range from 1920s bungalows with original galvanized iron pipes to modern construction with PEX and copper. Richard is experienced with all pipe materials and repair methods — including trenchless pipe lining for sewer laterals. For emergency burst pipe repairs, Richard is available 24/7 at (310) 853-5200. For planned repipe projects, he offers free on-site estimates.",
    faqs: [
      { question: "What types of pipes do LA homes typically have?", answer: "Older homes (pre-1970s) often have galvanized iron or cast iron. Mid-century homes may have copper. Newer homes typically use PEX or CPVC. Each material requires different repair techniques." },
      { question: "When should I repipe my home?", answer: "Signs that repiping may be needed include discolored water, low pressure at multiple fixtures, recurring leaks, and galvanized pipes over 40 years old." },
      { question: "How long does pipe repair take?", answer: "Simple repairs take 1–3 hours. Full repipes are typically completed in 1–3 days depending on home size and complexity." },
      { question: "Is pipe repair covered by homeowner's insurance?", answer: "Sudden damage (like a burst pipe) is often covered. Slow leaks and corrosion typically are not. Richard can document the damage to support your insurance claim." },
    ],
  },
  "toilet-repair": {
    title: "Toilet Repair Los Angeles",
    metaTitle: "Toilet Repair Los Angeles | Richards Rooter & Plumbing",
    metaDescription: "Toilet running, leaking, or won't flush in LA? Richard Yazmajian fixes all toilet problems. Licensed plumber, free estimates. Call (310) 853-5200.",
    h1: "Toilet Repair in Los Angeles",
    intro: "A running toilet can waste 200 gallons of water per day. A leaking toilet base is a slow path to floor damage. Richard Yazmajian fixes all toilet problems across Los Angeles.",
    body: "Whether your toilet runs constantly, leaks at the base, rocks on the floor, flushes weakly, or needs full replacement, Richard diagnoses and repairs it correctly. He stocks common replacement parts — flappers, fill valves, wax rings, and flush valves — so most repairs are completed in a single visit. Call (310) 853-5200 for same-day toilet repair anywhere in LA.",
    faqs: [
      { question: "Why does my toilet keep running?", answer: "Usually a faulty flapper, float, or fill valve. These are inexpensive parts. Richard can fix a running toilet quickly and affordably." },
      { question: "Why is my toilet leaking at the base?", answer: "A wax ring failure is the most common cause. Richard replaces the wax ring and resets the toilet, checking for any floor damage in the process." },
      { question: "Can you replace my toilet with a more water-efficient model?", answer: "Yes. Richard can install any toilet you purchase, or recommend a quality low-flow model. WaterSense toilets use 1.28 GPF versus 1.6 GPF for standard models." },
      { question: "What should I do if my toilet overflows?", answer: "Turn off the water supply valve at the base of the toilet immediately. If you cannot reach it, turn off the main shutoff. Then call Richard at (310) 853-5200." },
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | null {
  const base = SERVICES.find((s) => s.slug === slug);
  if (!base || !content[slug]) return null;
  return { slug, name: base.name, ...content[slug] };
}

export function getAllServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}
