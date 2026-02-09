import Link from "next/link";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors mb-12 inline-flex items-center gap-2"
          >
            ← Retour
          </Link>

          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-gray-600">Dernière mise à jour : 26 janvier 2026</p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                La présente Politique de confidentialité explique comment KLYPOP (ci-après « nous », « notre » ou « Klypop ») 
                collecte, utilise, conserve et protège les données à caractère personnel des utilisateurs de ses services 
                (ci-après « vous » ou « Utilisateur »).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les données à caractère personnel (« Données personnelles ») désignent toute information permettant de vous 
                identifier directement ou indirectement dans le cadre de l'utilisation des services Klypop (les « Services »).
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">1. Données que nous collectons</h2>
              
              <h3 className="text-xl text-gray-900 mb-3 mt-6">1.1 Données fournies directement par l'utilisateur</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Nous collectons notamment :</p>
              <div className="pl-6 space-y-3 text-gray-700">
                <p><strong>Informations de contact :</strong> prénom, nom, adresse e-mail, numéro de téléphone, ville ou zone géographique</p>
                <p><strong>Informations de compte :</strong> données nécessaires à la création et à la gestion d'un compte utilisateur ou restaurateur</p>
                <p><strong>Informations de commande :</strong> détails des commandes passées (restaurant, produits, date et heure de retrait)</p>
                <p><strong>Informations de paiement :</strong> les paiements sont réalisés via un lien de paiement sécurisé Stripe.</p>
                <p className="pl-4">👉 Klypop ne stocke aucune donnée bancaire</p>
                <p><strong>Communications :</strong> messages envoyés au support ou via les formulaires de contact</p>
              </div>

              <h3 className="text-xl text-gray-900 mb-3 mt-6">1.2 Données collectées automatiquement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lors de l'utilisation du site ou des Services, certaines données peuvent être collectées automatiquement :
              </p>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>Adresse IP</li>
                <li>Type d'appareil et navigateur</li>
                <li>Système d'exploitation</li>
                <li>Données de navigation et d'interaction</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Ces données sont utilisées à des fins de sécurité, d'analyse et d'amélioration des Services.
              </p>

              <h3 className="text-xl text-gray-900 mb-3 mt-6">1.3 Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Klypop utilise des cookies strictement nécessaires au bon fonctionnement du site, ainsi que des cookies de mesure d'audience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">2. Utilisation des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Vos Données personnelles sont utilisées pour :</p>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>Fournir et exploiter les Services Klypop</li>
                <li>Permettre la commande et le paiement en ligne avec retrait chez le restaurateur</li>
                <li>Communiquer avec vous (confirmations, support, informations importantes)</li>
                <li>Améliorer la performance et la sécurité de la plateforme</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">3. Partage des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Les Données personnelles peuvent être partagées uniquement avec :</p>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>Prestataires techniques (hébergement, paiement Stripe, outils d'analyse)</li>
                <li>Restaurants partenaires, strictement pour la préparation des commandes</li>
                <li>Autorités compétentes, lorsque la loi l'exige</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                👉 Klypop ne vend ni ne loue vos données personnelles.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">4. Transferts internationaux</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Certains prestataires peuvent être situés en dehors de votre pays de résidence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dans ce cas, Klypop met en place des garanties conformes au RGPD afin d'assurer la protection des données.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">5. Données des mineurs</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Les Services Klypop sont réservés aux personnes âgées de 18 ans ou plus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nous ne collectons pas sciemment de données concernant des mineurs.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">6. Sécurité des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Klypop met en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les Données 
                personnelles contre tout accès non autorisé, perte ou divulgation.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">7. Conservation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Les Données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles 
                elles ont été collectées, sauf obligation légale contraire.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">8. Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition</li>
                <li>Droit à la portabilité</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, contactez-nous à :
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                📧 <a href="mailto:support@klypop.ai" className="text-gray-900 hover:underline">support@klypop.ai</a>
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">9. Modifications de la politique</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Klypop peut mettre à jour la présente Politique de confidentialité.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La date de dernière mise à jour sera modifiée en conséquence.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Pour toute question relative à la protection des données :
              </p>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>KLYPOP</strong></p>
              <p className="text-gray-700 leading-relaxed">
                📧 <a href="mailto:support@klypop.ai" className="text-gray-900 hover:underline">support@klypop.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}