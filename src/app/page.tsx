import Logo from "@/components/Logo";
import UkraineMap from "@/components/UkraineMap";

export default function Home() {
  return (
    <main className="flex-1 bg-cream text-ink">
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-6 text-center">
        <Logo />
        <h1 className="font-logo text-2xl sm:text-3xl text-maroon mt-8">
          Смаки кожного регіону України
        </h1>
        <p className="text-ink/70 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Натисніть на регіон на мапі, щоб відкрити його автентичне меню —
          страви, притаманні саме цьому краю.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
        <UkraineMap />
      </section>
    </main>
  );
}
