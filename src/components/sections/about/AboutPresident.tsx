"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutPresident: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-dark/60 uppercase tracking-wider mb-2">
                Aboubacar « Aldo » Kourouma - Président
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                le chef de l'APEC.
              </h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-dark">
              Un acteur engagé de la société civile, passionné par le changement
              et l'avenir de l'Afrique.
            </h3>

            <div className="space-y-4 text-dark/70 leading-relaxed">
              <p>
                Aboubacar « Aldo » Kourouma est le Fondateur et Président de
                l'APEC Internationale – Action Pour l'Éducation Citoyenne.
                Acteur engagé de la société civile guinéenne, il crée l'APEC en
                2022 avec une conviction claire : le véritable changement en
                Afrique commence par un changement de mentalités à la base, à
                travers l'éducation citoyenne, l'engagement de la jeunesse et un
                sens renouvelé de responsabilité envers l'avenir du continent.
              </p>

              <p>
                Sous sa direction, l'APEC Internationale est devenue une
                plateforme de réflexion et d'action autour des grands défis de
                nos sociétés, en particulier la fuite des cerveaux des étudiants
                et professionnels africains. À travers des conférences, débats
                et campagnes de sensibilisation organisés en Guinée et à
                l'étranger – notamment au Maroc – Aboubacar Aldo défend des
                solutions concrètes, pensées par et pour les Africains, afin
                d'encourager les talents à rester, revenir ou réinvestir leurs
                compétences dans leurs pays d'origine.
              </p>

              <p>
                Il intervient régulièrement dans les médias et lors d'événements
                internationaux pour rappeler que la fuite des cerveaux est un
                enjeu crucial pour le développement du continent et que la
                jeunesse doit disposer de véritables perspectives et voies
                d'engagement chez elle.
              </p>

              <p>
                Au-delà du plaidoyer, il œuvre à bâtir des passerelles entre
                institutions, ambassades, universités et diaspora africaine, en
                forgeant des partenariats qui soutiennent l'éducation, la
                culture citoyenne et la cohésion sociale. De Conakry à Rabat,
                Aboubacar Aldo Kourouma incarne une nouvelle génération de
                leaders africains engagés : ancrés dans leurs communautés,
                ouverts sur le monde et déterminés à réactiver le patriotisme,
                retenir les talents et transformer les sociétés – un citoyen à
                la fois.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark/10 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark/10 hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark/10 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative mx-auto max-w-full w-[420px] sm:w-[540px] md:w-[660px] lg:w-[780px] xl:w-[960px]">
              <svg
                viewBox="0 0 800 800"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="blob-shape">
                    <path d="M400 740.945C425.69 741.436 452.006 743.125 476.679 735.954C501.334 728.789 519.85 707.714 544.031 699.084C570.207 689.741 600.363 694.587 625.544 682.823C650.524 671.153 675.47 654.645 689.704 631.031C704.375 606.693 703.286 575.993 706.929 547.809C710.231 522.261 706.889 496.368 710.408 470.849C713.735 446.721 727.451 424.355 727.312 400C727.173 375.64 713.982 353.298 709.602 329.335C705.11 304.755 706.19 279.532 700.835 255.126C695.135 229.149 690.135 202.292 676.694 179.344C663.241 156.375 641.614 139.548 622.368 121.16C602.521 102.198 586.194 75.9263 559.969 67.8218C532.431 59.3119 502.792 78.0976 474.101 75.3409C448.287 72.8605 425.893 50.9989 400 52.4514C373.746 53.9242 353.41 77.7062 327.772 83.5494C302.128 89.394 275.09 82.2873 249.183 86.8243C221.801 91.6193 192.259 94.9684 169.712 111.229C147.385 127.331 140.222 157.656 122.16 178.43C103.595 199.784 76.583 213.182 60.7079 236.606C44.7975 260.081 34.4924 287.512 29.3311 315.397C24.1819 343.217 24.7857 372.284 30.4652 400C36.0647 427.326 57.5161 449.589 62.4544 477.043C67.5908 505.598 50.1724 536.447 59.924 563.772C69.3775 590.262 92.4583 610.972 115.833 626.616C139.613 642.532 170.107 644.125 196.5 655.181C218.902 664.565 240.757 674.97 261.486 687.628C283.532 701.091 299.88 723.752 323.988 733.032C347.837 742.212 374.45 740.456 400 740.945Z" />
                  </clipPath>
                </defs>
                <image
                  href="/images/aldo.jpg"
                  x="10"
                  y="60"
                  width="820"
                  height="820"
                  clipPath="url(#blob-shape)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
