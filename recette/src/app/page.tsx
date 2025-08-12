
import Header from "@/components/page/header/header";
import StartHeader from "@/components/page/header/start";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleOneTap, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { BookOpen, FileText, Printer, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GoogleOneTap />
      <Header />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-background py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Votre recette, notre mise en page
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez vos ingrédients en fiches recettes professionnelles prêtes à imprimer en un clic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <SignedOut>
              <StartHeader text="Créer mon livre de recettes" />
              <Link href="/explorer" className="cursor-pointer">
                <Button variant="ghost">Explorer les recettes</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/mes-recettes">
              <Button>Voir mes recettes</Button>
              </Link>
            </SignedIn>
          </div>

          {/* Mockup Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="/placeholder-10b21.png"
                alt="Exemple de fiche recette BoulangeBook"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">1. Saisissez vos ingrédients</h3>
              <p className="text-muted-foreground leading-relaxed">
                Listez simplement vos ingrédients et quantités dans notre interface intuitive
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">2. Génération instantanée</h3>
              <p className="text-muted-foreground leading-relaxed">
                Notre IA crée automatiquement une fiche recette élégante et professionnelle
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Printer className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">3. Imprimez ou sauvegardez</h3>
              <p className="text-muted-foreground leading-relaxed">
                Téléchargez votre fiche en PDF ou ajoutez-la à votre livre de recettes en ligne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu du livre de recettes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Votre bibliothèque de recettes grandit avec vous
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chaque fiche créée s'ajoute automatiquement à votre collection personnelle, accessible partout
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-accent/20"
              >
                <CardContent className="p-6">
                  <img
                    src={`/french-bakery-recipe-card.png?height=200&width=300&query=French bakery recipe card ${i} with elegant typography`}
                    alt={`Fiche recette ${i}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {
                      ["Pain de campagne", "Croissants", "Brioche", "Baguette tradition", "Pain aux noix", "Focaccia"][
                        i - 1
                      ]
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Créée le{" "}
                    {new Date(
                      2024,
                      Math.floor(Math.random() * 12),
                      Math.floor(Math.random() * 28) + 1,
                    ).toLocaleDateString("fr-FR")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Pourquoi choisir Mon livre de recettes ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Rapide et intuitif</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créez une fiche professionnelle en moins de 2 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Design professionnel</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mise en page élégante prête pour l'impression haute qualité
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Accessible partout</h3>
              <p className="text-muted-foreground leading-relaxed">
                Votre collection de recettes synchronisée sur tous vos appareils
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vos recettes méritent d'être mémorisées
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Rejoignez une communauté de boulangers qui font confiance à "Mon livre de recettes" pour créer des fiches recettes
            exceptionnelles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SignedOut>
              <StartHeader text="Créer mon livre de recettes" />
              <p className="text-sm text-muted-foreground">✓ 100% gratuit</p>
            </SignedOut>
            <SignedIn>
              <Link href="/mes-recettes">
              <Button>Voir mes recettes</Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Mon livre de recettes</h3>
          <p className="text-background/80 mb-6">Le générateur de fiches recettes pour les passionnés de boulangerie</p>
          <div className="flex justify-center space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
