'use client'

import AnimatedCounter from '../ui/AnimatedCounter'

export default function Hero() {
    return (
        <main className="px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Искусственный интеллект для бизнеса
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto">
                Создаем интеллектуальные решения для крупнейших компаний Кыргызстана
            </p>

            {/* Статистики с анимированными счетчиками */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-white/60">Проектов</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={10} prefix="$" suffix="M+" />
                    </div>
                    <div className="text-white/60">Экономии клиентов</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={99.9} suffix="%" />
                    </div>
                    <div className="text-white/60">Аптайм</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={25} suffix="+" />
                    </div>
                    <div className="text-white/60">Экспертов</div>
                </div>
            </div>
        </main>
    )
}
