'use client'

import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

export default function EarthColor() {
  const { t } = useLanguage()

  const features = [
    {
      number: '1',
      color: 'bg-[#9CAF68]',
      text: t({
        JP: 'フレッシュで魅力的な印象',
        EN: 'Looks fresh and attractive etc.'
      })
    },
    {
      number: '2',
      color: 'bg-[#D4B896]',
      text: t({
        JP: '顔・髪・首・Vゾーン・足など全身に使用可能',
        EN: 'You can use on face, hair, neck, V-zone, foot etc.'
      })
    },
    {
      number: '3',
      color: 'bg-[#7FA8A0]',
      text: t({
        JP: '色だけでなくニオイも消去',
        EN: 'Not only color but smell is gone'
      })
    },
    {
      number: '4',
      color: 'bg-[#C08A6B]',
      text: t({
        JP: '肌色は第一印象を決める最も重要な要素',
        EN: 'Skin color is most important in giving image to other person.'
      })
    }
  ]

  return (
    <section className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4 items-center">
            {/* Left Column: Title + Features */}
            <div className="space-y-8 pr-2">
              {/* Title Section */}
              <div className="space-y-4 text-right">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  {t({
                    JP: '地球の色があなたの肌に',
                    EN: 'EARTH COLOR FOR YOUR SKIN'
                  })}
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                  {t({
                    JP: 'マザーベジタブルが作る地球の色が、\nより自然で健康的な色をもたらします',
                    EN: 'The mother vegetable creates earth color for your skin.\nThe earth color gives you more natural and healthy color.'
                  })}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 flex-row-reverse">
                    {/* Number */}
                    <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-black font-bold text-lg">
                        {feature.number}
                      </span>
                    </div>
                    {/* Text */}
                    <p className="text-base text-gray-200 leading-relaxed text-right">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-start items-center h-full pl-2">
              <div className="relative w-full max-w-md">
                <Image
                  src="/confidence_top.png"
                  alt="Confidence - Earth Color Benefits"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Title Section */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-white">
                {t({
                  JP: '地球の色があなたの肌に',
                  EN: 'EARTH COLOR FOR YOUR SKIN'
                })}
              </h2>
              <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
                {t({
                  JP: 'マザーベジタブルが作る地球の色が、\nより自然で健康的な色をもたらします',
                  EN: 'The mother vegetable creates earth color for your skin.\nThe earth color gives you more natural and healthy color.'
                })}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/confidence_top.png"
                  alt="Confidence - Earth Color Benefits"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 px-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Number */}
                  <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-black font-bold text-lg">
                      {feature.number}
                    </span>
                  </div>
                  {/* Text */}
                  <p className="text-base text-gray-200 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}