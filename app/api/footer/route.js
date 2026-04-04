export async function GET() {
  return Response.json({
    about: "Providing exceptional healthcare services with compassion and innovation since 2000.",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
    quick_links: ["About Us", "Our Services", "Our Doctors", "Appointments", "Contact Us"],
    services: ["Primary Care", "Emergency Care", "Surgery", "Diagnostics", "Mental Health"],
    contact: {
      address: "123 Healthcare Avenue, Medical District, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "info@medcare.com"
    }
  });
}