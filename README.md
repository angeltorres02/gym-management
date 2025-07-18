# Sistema de Gestión de Gimnasio

Este es un proyecto de sistema de gestión de gimnasios construido con Next.js, TypeScript, Tailwind CSS, Prisma y NextAuth.

## Características

- **Gestión de usuarios:** Crear, leer, actualizar y eliminar usuarios.
- **Gestión de clientes:** Crear, leer, actualizar y eliminar clientes.
- **Gestión de pagos:** Registrar y ver los pagos de los clientes.
- **Dashboard:** Un panel de control con estadísticas sobre pagos, membresías a punto de expirar y clientes activos.
- **Autenticación:** Autenticación segura con NextAuth.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - El framework de React para producción.
- [TypeScript](https://www.typescriptlang.org/) - Un superconjunto de JavaScript con tipado estático.
- [Tailwind CSS](https://tailwindcss.com/) - Un framework de CSS de utilidad primero.
- [Prisma](https://www.prisma.io/) - Un ORM de próxima generación para Node.js y TypeScript.
- [NextAuth.js](https://next-auth.js.org/) - Autenticación para aplicaciones Next.js.
- [PostgreSQL](https://www.postgresql.org/) - Una potente base de datos relacional de código abierto.
- [Recharts](https://recharts.org/) - Una biblioteca de gráficos componibles construida con React y D3.

## Empezando

### Prerrequisitos

- Node.js (v20 o superior)
- pnpm (o npm/yarn)
- PostgreSQL

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
2. Instala las dependencias:
   ```bash
   pnpm install
3. Configura las variables de entorno:

Crea un archivo .env.local en la raíz del proyecto y añade las siguientes variables:

   ```bash
   DATABASE_URL="postgresql://usuario:contraseña@servidor:puerto/basededatos"
   DIRECT_URL="postgresql://usuario:contraseña@servidor:puerto/basededatos"
   AUTH_SECRET="tu-secreto-de-autenticacion"
4. Aplica las migraciones de la base de datos:
   ```bash
   pnpm prisma migrate dev
5. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
Abre http://localhost:3000 con tu navegador para ver el resultado.

## Despliegue

Para desplegar la aplicación, puedes usar Vercel, la plataforma de los creadores de Next.js.

Consulta la documentación de despliegue de Next.js para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir los cambios que te gustaría hacer.
