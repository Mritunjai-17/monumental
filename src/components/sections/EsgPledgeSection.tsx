'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Leaf,
  Users,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  FileText,
  HeartHandshake,
} from 'lucide-react';

export function EsgPledgeSection() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <section className="section-y bg-white border-y border-[#DDE3E3]">
      <Container>
        {/* Section Header with Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E8EDE9]">
          <div className="min-w-0 max-w-2xl">
            <Eyebrow>Institutional Charter &amp; Pledges</Eyebrow>
            <h2 className={cn(type.h2, tone.headingLight, 'mb-3')}>
              {lang === 'en'
                ? 'Corporate ESG Commitments & Standards'
                : 'Compromiso Ambiental, Social y Gobernanza'}
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed">
              {lang === 'en'
                ? 'Our operational charter adheres to leading international human rights treaties, sustainable development frameworks, and community consultation protocols.'
                : 'Nuestra carta operativa se adhiere a los principales tratados internacionales de derechos humanos, marcos de desarrollo sostenible y protocolos de consulta comunitaria.'}
            </p>
          </div>

          {/* Bilingual English / Español Toggle Button */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FAFBF9] rounded-xl border border-[#DDE3E3] shrink-0 self-start sm:self-end">
            <Globe2 className="w-4 h-4 text-[#1F6F78] ml-2 mr-1" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLang('en')}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200',
                lang === 'en'
                  ? 'bg-[#1F6F78] text-white shadow-xs'
                  : 'text-[#5B6B73] hover:text-[#0B1F2A]'
              )}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang('es')}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200',
                lang === 'es'
                  ? 'bg-[#1F6F78] text-white shadow-xs'
                  : 'text-[#5B6B73] hover:text-[#0B1F2A]'
              )}
            >
              Español
            </button>
          </div>
        </div>

        {/* Global Framework Citations Badge Strip */}
        <div className="mb-10 rounded-2xl bg-[#FAFBF9] border border-[#E8EDE9] p-5 sm:p-6">
          <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block mb-3">
            {lang === 'en' ? 'Recognized International Frameworks' : 'Marcos Internacionales Reconocidos'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#0B1F2A]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
              <span>
                <strong>UN Guiding Principles</strong> on Business and Human Rights
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
              <span>
                <strong>UN Sustainable Development Goals</strong> (SDGs)
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
              <span>
                <strong>ILO Convention 169</strong> on Indigenous &amp; Tribal Peoples
              </span>
            </div>
          </div>
        </div>

        {/* Two Detailed Commitment Pillars: Environmental & Social/Community */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 1: Environmental Stewardship */}
          <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
            <div className="h-full rounded-[22px] bg-[#FAFBF9] border border-[#E8EDE9] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                    <Leaf className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                      {lang === 'en' ? 'Pillar 01 · Environment' : 'Pilar 01 · Ambiental'}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1F2A]">
                      {lang === 'en' ? 'Environmental Stewardship' : 'Administración Responsable'}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'The responsible stewardship of the local environment where we operate is at the heart of our corporate values. We evaluate impacts in advance and commit to comprehensive mitigation.'
                    : 'La administración responsable del entorno local en el que operamos está en el centro de nuestros valores corporativos. Evaluamos los impactos anticipadamente y nos comprometemos con la mitigación integral.'}
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Evaluate in advance all operational impacts on the environment and neighboring communities.'
                        : 'Evaluar anticipadamente los impactos de nuestras operaciones en el medio ambiente y en las comunidades aledañas.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Develop and implement preventive, mitigating, and compensatory measures to shrink our footprint.'
                        : 'Desarrollar y ejecutar las medidas de prevención, mitigación y reparación apropiadas.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Promote citizen and community participation in environmental management from design through monitoring.'
                        : 'Promover el involucramiento de las comunidades locales en la gestión ambiental desde el diseño hasta el seguimiento.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Deploy technical advances (such as Direct Lithium Extraction) aimed at preserving hydrology.'
                        : 'Implementar avances técnicos y buenas prácticas que permitan un desarrollo sustentable.'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>{lang === 'en' ? 'Impact Mitigation' : 'Mitigación de Impactos'}</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">ISO 14001 Aligned</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Social & Community Autonomy */}
          <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
            <div className="h-full rounded-[22px] bg-[#FAFBF9] border border-[#E8EDE9] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                    <Users className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                      {lang === 'en' ? 'Pillar 02 · Social & Community' : 'Pilar 02 · Social y Comunidad'}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#0B1F2A]">
                      {lang === 'en' ? 'Community Autonomy & Prosperity' : 'Autonomía y Prosperidad Local'}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'The nurturing of our social licence is integral to our success. Wherever we operate, we are committed to respecting local values, traditions, and economic development.'
                    : 'El desarrollo de nuestra licencia social es parte integral de nuestro éxito. Dondequiera que operemos, estamos comprometidos con el respeto de los valores, costumbres y economía local.'}
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Prioritization of well-paying local employment and career development opportunities.'
                        : 'Creación de empleo local bien remunerado y programas de capacitación.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Priority procurement policies for sourcing local goods and regional commercial services.'
                        : 'Priorización del abastecimiento de bienes y servicios con proveedores locales.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Direct sponsorship of local infrastructure and community enhancement projects.'
                        : 'Apoyo activo a iniciativas de mejora e infraestructura comunitaria.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span>
                      {lang === 'en'
                        ? 'Continuous open dialogue and consultation respecting local autonomy and governance.'
                        : 'Diálogo y consulta periódica respetando la autonomía y costumbres tradicionales.'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>{lang === 'en' ? 'Social Licence' : 'Licencia Social'}</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">ILO 169 Accord</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
