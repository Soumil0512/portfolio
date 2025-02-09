// import { cookies } from "next/headers";

// type Theme = "light" | "dark";

// async function getSystemTheme(): Promise<Theme> {
//   const cookieStore = await cookies();
//   const colorScheme = cookieStore.get("Sec-CH-Prefers-Color-Scheme")?.value;
//   return colorScheme === "dark" ? "dark" : "light";
// }

// export async function getThemeFromCookies(): Promise<Theme> {
//   const cookieStore = await cookies();
//   const themeFromCookie: string | undefined = cookieStore.get("theme")?.value;
//   if (themeFromCookie === "light" || themeFromCookie === "dark") {
//     return themeFromCookie;
//   }

//   return await getSystemTheme();
// }
