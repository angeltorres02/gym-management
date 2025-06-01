import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/utils/password";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Limpiar datos existentes (opcional)
    await prisma.payments.deleteMany();
    await prisma.record.deleteMany();
    await prisma.client.deleteMany();
    await prisma.user.deleteMany();

    // Hash de las contraseñas usando tu función
    const hashedPassword = await hashPassword("123456");

    // Crear usuarios
    await prisma.user.createMany({
      data: [
        {
          name: "Luis Angel Vidal Torres",
          password: hashedPassword,
          username: "anta",
          role: "admin",
        },
        {
          name: "Yareli Rosas Santamaria",
          password: hashedPassword,
          username: "yareli",
          role: "admin",
        },
        {
          name: "Alan Espinoza Flores",
          password: hashedPassword,
          username: "alan",
          role: "admin",
        },
      ],
    }); // Crear clientes de ejemplo
    const clients = await prisma.client.createMany({
      data: [
        {
          name: "María González López",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Carlos Rodríguez Martín",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Ana Fernández García",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Pedro Sánchez Ruiz",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Laura Jiménez Moreno",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Diego Herrera Castro",
          membershipType: "Basic",
          status: "suspended",
        },
        {
          name: "Carmen Díaz Vargas",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Roberto Mendoza Silva",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "José Antonio Ramírez",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Isabella García Torres",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Miguel Ángel Vargas",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Sofía Morales Pérez",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Alejandro Cruz Romero",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Valentina López Castro",
          membershipType: "Basic",
          status: "suspended",
        },
        {
          name: "Fernando Ortega Silva",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Camila Ruiz Mendoza",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Sebastián Torres Vega",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Daniela Flores Aguilar",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Ricardo Herrera Luna",
          membershipType: "VIP",
          status: "inactive",
        },
        {
          name: "Andrea Castillo Reyes",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Mateo Guerrero Peña",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Lucía Medina Santos",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Gabriel Navarro Campos",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Emilia Ramos Delgado",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Adrián Molina Vásquez",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Victoria Jiménez Cruz",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Leonardo Espinoza Moreno",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Renata Pacheco Rivera",
          membershipType: "Basic",
          status: "suspended",
        },
        {
          name: "Joaquín Salazar Fuentes",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Antonella Contreras León",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Nicolás Domínguez Rojas",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Mariana Valdez Cortés",
          membershipType: "Premium",
          status: "inactive",
        },
        {
          name: "Ángel Parra Hernández",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Fernanda Ríos Morales",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Maximiliano Cuevas Sandoval",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Regina Ibarra Gutiérrez",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Eduardo Acosta Velasco",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Paulina Maldonado Ochoa",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Rodrigo Villanueva Miranda",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Julieta Cabrera Solís",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Esteban Montoya Figueroa",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Ariana Cordero Espinoza",
          membershipType: "VIP",
          status: "suspended",
        },
        {
          name: "Ignacio Lara Betancourt",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Ximena Carrillo Estrada",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Felipe Rangel Núñez",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Monserrat Peña Villalobos",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Santiago Vega Zamora",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Alejandra Márquez Cervantes",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Emiliano Ayala Cardenas",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Catalina Rosas Mejía",
          membershipType: "VIP",
          status: "suspended",
        },
        {
          name: "Bruno Vázquez Padilla",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Constanza Vera Arellano",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Francisco Tapia Gallegos",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Isadora Serrano Escalante",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Thiago Bautista Nava",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Martina Santana Caballero",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Andrés Galván Montes",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Renata Cervantes Ponce",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Maximiliano Téllez Quiroz",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Luciana Arias Rosales",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Oliver Madrigal Villarreal",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Berenice Alvarado Segura",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Emilio Sosa Villalba",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Valeria Nieto Bernal",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Lorenzo Cano Herrera",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Luna Esquivel Mercado",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Patricio Román Alba",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Samantha Alarcón Escobar",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Gael Durán Campos",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Estrella Méndez Aguilera",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Damián Huerta Trejo",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Paloma Ochoa Coronado",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Ian Barrera Mata",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Allegra Robles Montero",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Vicente León Grande",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Frida Campos Avalos",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Kaleb Guerrero Cisneros",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Miranda Osorio Bermúdez",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Matías Zavala Solano",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Sienna Burgos Valenzuela",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Dylan Rosales Uribe",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Ivanna Castro Valdés",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Tomás Aranda Santillán",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Zoe Palacios Cárdenas",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Mateo Sánchez Bravo",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Carla Espinosa Franco",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Noah Villaseñor Cabrera",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Danna Cortés Ramírez",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Axel Montalvo Herrera",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Alma Carrasco Ibarra",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Liam Quintero Valle",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Mía Godínez Olivares",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Cristóbal Salinas Herrera",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Emma Saldaña Rivera",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Erick Noriega Mendez",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Abril Valencia Moreno",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Samuel Escalante Ortega",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Jimena Benítez Torres",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Gian Marco Uribe Mendoza",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Aria Santamaría Rojas",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Héctor Delgado Fonseca",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Aitana Mena Guerrero",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Benjamín Aguirre Paredes",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Sophia Zamora Silva",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Maximiliano Estrada Cortez",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Valentina Suárez Vargas",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Emiliano Vidal Cervantes",
          membershipType: "Premium",
          status: "suspended",
        },
        {
          name: "Renata Torres Aguilar",
          membershipType: "Basic",
          status: "active",
        },
        {
          name: "Izan Morales Cabrera",
          membershipType: "Premium",
          status: "active",
        },
        {
          name: "Olivia Restrepo González",
          membershipType: "VIP",
          status: "active",
        },
        {
          name: "Santino Figueroa Mendoza",
          membershipType: "Basic",
          status: "inactive",
        },
        {
          name: "Amelia Santos Herrera",
          membershipType: "Premium",
          status: "active",
        },
      ],
    });

    // Obtener los clientes creados para crear registros y pagos
    const createdClients = await prisma.client.findMany();

    // Crear algunos registros de asistencia
    const records = [];
    for (const client of createdClients.slice(0, 5)) {
      // Crear 3-5 registros por cliente
      for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
        records.push({
          clientId: client.id,
          date: new Date(
            Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
          ), // Últimos 30 días
        });
      }
    }

    await prisma.record.createMany({
      data: records,
    });

    // Crear algunos pagos
    const payments = [];
    for (const client of createdClients) {
      const membershipPrices = {
        Basic: 500,
        Premium: 800,
        VIP: 1200,
      };

      payments.push({
        clientId: client.id,
        amount:
          membershipPrices[
            client.membershipType as keyof typeof membershipPrices
          ],
        paymentStatus: client.status === "active" ? "paid" : "pending",
        date: new Date(
          Date.now() - Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
        ), // Últimos 15 días
      });
    }

    await prisma.payments.createMany({
      data: payments,
    });

    return new Response(
      "Database seeded successfully with users, clients, records, and payments",
      { status: 200 }
    );
  } catch (error) {
    console.error("Error seeding database:", error);
    return new Response("Error seeding database", { status: 500 });
  }
}
