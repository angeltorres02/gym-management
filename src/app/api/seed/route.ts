import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/utils/password";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Limpiar datos existentes en orden correcto debido a las relaciones
    await prisma.payments.deleteMany();
    await prisma.record.deleteMany();
    await prisma.client.deleteMany();
    await prisma.user.deleteMany();

    // Hash de las contraseñas usando tu función
    const hashedPassword = await hashPassword("123456"); // Crear usuarios
    await prisma.user.createMany({
      data: [
        {
          name: "Luis Angel Vidal Torres",
          password: hashedPassword,
          username: "anta",
          role: "admin",
          userStatus: "active",
        },
        {
          name: "Yareli Rosas Santamaria",
          password: hashedPassword,
          username: "yareli",
          role: "admin",
          userStatus: "active",
        },
        {
          name: "Alan Espinoza Flores",
          password: hashedPassword,
          username: "alan",
          role: "admin",
          userStatus: "inactive",
        },
      ],
    }); // Crear clientes de ejemplo con fechas de inscripción variadas
    const clientsData = [
      {
        name: "María González López",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Hace 30 días
      },
      {
        name: "Carlos Rodríguez Martín",
        membershipType: "Basic",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // Hace 15 días
      },
      {
        name: "Ana Fernández García",
        membershipType: "VIP",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // Hace 45 días
      },
      {
        name: "Pedro Sánchez Ruiz",
        membershipType: "Basic",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // Hace 60 días
      },
      {
        name: "Laura Jiménez Moreno",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // Hace 20 días
      },
      {
        name: "Diego Herrera Castro",
        membershipType: "Basic",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Carmen Díaz Vargas",
        membershipType: "VIP",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Roberto Mendoza Silva",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
      },
      {
        name: "José Antonio Ramírez",
        membershipType: "Basic",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Isabella García Torres",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Miguel Ángel Vargas",
        membershipType: "VIP",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Sofía Morales Pérez",
        membershipType: "Basic",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Alejandro Cruz Romero",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Valentina López Castro",
        membershipType: "Basic",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Fernando Ortega Silva",
        membershipType: "VIP",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Camila Ruiz Mendoza",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Sebastián Torres Vega",
        membershipType: "Basic",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 33 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Daniela Flores Aguilar",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Ricardo Herrera Luna",
        membershipType: "VIP",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Andrea Castillo Reyes",
        membershipType: "Basic",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Mateo Guerrero Peña",
        membershipType: "Premium",
        clientStatus: "inactive",
        signUpDate: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Lucía Medina Santos",
        membershipType: "VIP",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Gabriel Navarro Campos",
        membershipType: "Basic",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 38 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Emilia Ramos Delgado",
        membershipType: "Premium",
        clientStatus: "active",
        signUpDate: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000),
      },
    ];

    await prisma.client.createMany({
      data: clientsData,
    });

    // Obtener los clientes creados para crear registros y pagos
    const createdClients = await prisma.client.findMany();

    // Crear registros de asistencia más realistas
    const records = [];
    for (const client of createdClients) {
      // Solo clientes activos tienen registros recientes
      if (client.clientStatus === "active") {
        // Crear entre 5-15 registros por cliente activo
        const numRecords = Math.floor(Math.random() * 11) + 5;

        for (let i = 0; i < numRecords; i++) {
          const daysAgo = Math.floor(Math.random() * 60); // Últimos 60 días
          records.push({
            clientId: client.id,
            date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
          });
        }
      } else {
        // Clientes inactivos pueden tener algunos registros antiguos
        const numRecords = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numRecords; i++) {
          const daysAgo = Math.floor(Math.random() * 30) + 60; // Entre 60-90 días atrás
          records.push({
            clientId: client.id,
            date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
          });
        }
      }
    }

    await prisma.record.createMany({
      data: records,
    }); // Crear pagos más realistas
    const payments = [];
    for (const client of createdClients) {
      const membershipPrices = {
        Basic: 500,
        Premium: 800,
        VIP: 1200,
      };

      // Razones de pago comunes
      const paymentReasons = [
        "Mensualidad",
        "Inscripción",
        "Mantenimiento",
        "Entrenamiento personal",
        "Cuota de renovación",
        "Multa por retraso",
      ];

      // Crear varios pagos por cliente
      const numPayments =
        client.clientStatus === "active"
          ? Math.floor(Math.random() * 3) + 2 // 2-4 pagos para activos
          : Math.floor(Math.random() * 2) + 1; // 1-2 pagos para inactivos

      for (let i = 0; i < numPayments; i++) {
        const daysAgo =
          client.clientStatus === "active"
            ? Math.floor(Math.random() * 30) + i * 30 // Pagos más recientes para activos
            : Math.floor(Math.random() * 60) + 60 + i * 30; // Pagos más antiguos para inactivos

        // Determinar el estado del pago usando los valores del enum
        let paymentStatus: "pending" | "completed";
        if (client.clientStatus === "active" && i < numPayments - 1) {
          paymentStatus = "completed";
        } else {
          paymentStatus = Math.random() > 0.3 ? "completed" : "pending";
        }

        payments.push({
          clientId: client.id,
          amount:
            membershipPrices[
              client.membershipType as keyof typeof membershipPrices
            ],
          paymentStatus: paymentStatus,
          reason:
            paymentReasons[Math.floor(Math.random() * paymentReasons.length)],
          date: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        });
      }
    }

    await prisma.payments.createMany({
      data: payments,
    });

    return new Response(
      `Database seeded successfully with ${createdClients.length} clients, ${records.length} records, and ${payments.length} payments`,
      { status: 200 }
    );
  } catch (error) {
    console.error("Error seeding database:", error);
    return new Response("Error seeding database", { status: 500 });
  }
}
