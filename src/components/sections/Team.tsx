'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Avatar, Card, CardBody, Modal, ModalContent, ModalBody, Link } from '@nextui-org/react'
import VideoAvatar, { VideoAvatarRef } from '@/components/ui/VideoAvatar'

export default function Team() {
    const { locale } = useTranslation()
    const [selectedMember, setSelectedMember] = useState<string | null>(null)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [livePhotoPlaying, setLivePhotoPlaying] = useState<string | null>(null)
    const modalVideoRef = useRef<VideoAvatarRef>(null)

    // Auto-play video when modal opens
    useEffect(() => {
        if (selectedMember !== null) {
            const timer = setTimeout(() => {
                setIsVideoPlaying(true)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            setIsVideoPlaying(false)
        }
    }, [selectedMember])

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                preTitle: 'Team',
                title: 'Meet our experts',
                subtitle: 'Experienced specialists in artificial intelligence and enterprise development'
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Команда',
                title: 'Биздин адистер',
                subtitle: 'Жасалма интеллект жана корпоративдүү иштеп чыгуу боюнча тажрыйбалуу адистер'
            }
        } else {
            return {
                preTitle: 'Команда',
                title: 'Познакомьтесь с экспертами',
                subtitle: 'Опытные специалисты в области искусственного интеллекта и enterprise-разработки'
            }
        }
    }

    const getTeamMembers = () => {
        if (locale === 'en') {
            return [
                {
                    id: 'lead_dev',
                    name: 'Begaiym Zhardambekova',
                    position: 'Gov & Banks Dept Lead',
                    experience: '10+ years in IT Tech',
                    video: '/Begaiym.mp4',
                    preview: '/Begaiym-preview.jpg',
                    gradient: 'from-green-500 to-emerald-500',
                    fullPosition: 'Banking Sector Project Manager',
                    email: 'b.zhardambekova@evogroup.ai',
                    bio: 'Has three years of experience in digitalization: started working at the State Tax Service under the Ministry of Finance of the Kyrgyz Republic, where she participated in the development of government software products. Currently works in the private sector, developing digital solutions in the banking sector. Possesses solid expertise in requirements management and creating effective IT services.'
                },
                {
                    id: 'cto',
                    name: 'Askar Rasulov',
                    position: 'Project Manager',
                    experience: '10+ years in IT Tech',
                    video: '/Askar.mp4',
                    preview: '/Askar-preview.jpg',
                    gradient: 'from-purple-500 to-pink-500',
                    fullPosition: 'Project Manager | Oil-Gas Department',
                    email: 'a.rasulov@evogroup.ai',
                    bio: 'Experienced leader in IT and oil-gas sector with deep expertise in digital transformation and enterprise solutions.'
                },
                {
                    id: 'ceo',
                    name: 'Vadim Berkovich',
                    position: 'CEO & AI Architect',
                    experience: '15+ years in DevTech',
                    video: '/Vadim.mp4',
                    preview: '/Vadim-preview.jpg',
                    gradient: 'from-blue-500 to-cyan-500',
                    fullPosition: 'CEO | Lead AI, Data Architecture and Educational Systems Expert',
                    email: 'v.berkovich@evogroup.ai',
                    whatsapp: '+996700123456',
                    linkedin: 'https://linkedin.com',
                    bio: 'Data architect and technical leader with 20+ years of experience in designing corporate systems. Specializes in AI solutions, machine learning, and information systems modernization. Currently working on digital transformation of education as part of an international EU project in Kyrgyzstan. Has experience at Microsoft Corporation (Munich) and numerous awards for innovative solutions.'
                },
                {
                    id: 'sales',
                    name: 'Elmira Myrzabekova',
                    position: 'Sales Manager | B2B',
                    experience: '3+ years in B2B Sales',
                    video: '/Elya2.0.mov',
                    preview: '/Elya-preview.jpg',
                    gradient: 'from-orange-500 to-amber-500',
                    fullPosition: 'Sales Manager | B2B | IT and AI Solutions',
                    email: 'ely@evogroup.ai',
                    whatsapp: '+996552343333',
                    bio: 'Sales manager with B2B experience. Specializes in selling IT solutions, business process automation, and implementing AI tools. Manages the full sales cycle — from initial contact and identifying client needs to implementation and ongoing support.'
                },
                {
                    id: 'marketing',
                    name: 'Aizat Sagynova',
                    position: 'Marketing & Content',
                    experience: '3+ years in Tech Marketing',
                    video: '/Aizat.mp4',
                    preview: '/Aizat-preview.jpg',
                    gradient: 'from-pink-500 to-rose-500',
                    fullPosition: 'Marketing Specialist | AI & Business Communications',
                    email: 'a.sagynova@evogroup.ai',
                    bio: 'Marketing specialist focused on transforming complex technologies into understandable stories. Works at the intersection of AI industry and business communications, creating content that explains, sells, and educates. From video scripts to full marketing campaigns — helps tech companies find common language with their audience. Experience with banks, retail, and government sector in digital transformation projects in Kyrgyzstan.'
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    id: 'lead_dev',
                    name: 'Бегайым Жардамбекова',
                    position: 'Мамлекеттик жана банк бөлүмүнүн жетекчиси',
                    experience: 'IT Tech тармагында 10+ жыл',
                    video: '/Begaiym.mp4',
                    preview: '/Begaiym-preview.jpg',
                    gradient: 'from-green-500 to-emerald-500',
                    fullPosition: 'Банк секторундагы долбоорлордун жетекчиси',
                    email: 'b.zhardambekova@evogroup.ai',
                    bio: 'Санариптештирүү тармагында үч жылдык тажрыйбасы бар: КР Финансы министрлигинин ММБсинде мамлекеттик программалык продуктуларды өнүктүрүүгө катышып, ишин баштаган. Азыркы учурда жеке секторда банк тармагында санариптик чечимдерди өнүктүрүү менен алектенет. Талаптарды башкаруу жана эффективдүү IT-кызматтарды түзүү боюнча туруктуу тажрыйбага ээ.'
                },
                {
                    id: 'cto',
                    name: 'Аскар Расулов',
                    position: 'Долбоорлордун жетекчиси',
                    experience: 'IT Tech тармагында 10+ жыл',
                    video: '/Askar.mp4',
                    preview: '/Askar-preview.jpg',
                    gradient: 'from-purple-500 to-pink-500',
                    fullPosition: 'Долбоорлордун жетекчиси | Мунай-газ бөлүмү',
                    email: 'a.rasulov@evogroup.ai',
                    bio: 'Санариптик трансформация жана корпоративдик чечимдер боюнча терең билимге ээ IT жана мунай-газ секторунда тажрыйбалуу лидер.'
                },
                {
                    id: 'ceo',
                    name: 'Вадим Беркович',
                    position: 'CEO жана ИИ архитектору',
                    experience: 'DevTech тармагында 15+ жыл',
                    video: '/Vadim.mp4',
                    preview: '/Vadim-preview.jpg',
                    gradient: 'from-blue-500 to-cyan-500',
                    fullPosition: 'CEO | ИИ, маалымат архитектурасы жана билим берүү системалары боюнча негизги эксперт',
                    email: 'v.berkovich@evogroup.ai',
                    whatsapp: '+996700123456',
                    linkedin: 'https://linkedin.com',
                    bio: 'Корпоративдик системаларды долбоорлоодо 20 жылдан ашык тажрыйбасы бар маалымат архитектору жана техникалык лидер. ИИ чечимдерине, машина үйрөнүүгө жана маалымат системаларын модернизациялоого адистешкен. Азыркы учурда Кыргызстандагы эл аралык ЕС долбоорунун алкагында билим берүүнүн санариптик трансформациясы боюнча иштеп жатат. Microsoft Corporation (Мюнхен) тажрыйбасы жана инновациялык чечимдер үчүн көптөгөн сыйлыктары бар.'
                },
                {
                    id: 'sales',
                    name: 'Эльмира Мырзабекова',
                    position: 'Сатуу боюнча менеджер | B2B',
                    experience: 'B2B сатууларында 3+ жыл',
                    video: '/Elya2.0.mov',
                    preview: '/Elya-preview.jpg',
                    gradient: 'from-orange-500 to-amber-500',
                    fullPosition: 'Сатуу боюнча менеджер | B2B | IT жана AI чечимдери',
                    email: 'ely@evogroup.ai',
                    whatsapp: '+996552343333',
                    bio: 'B2B тармагында тажрыйбасы бар сатуу боюнча менеджер. IT-чечимдерди сатууга, бизнес-процесстерди автоматташтырууга жана AI-куралдарды ишке ашырууга адистешкен. Сатуунун толук циклин жүргүзөт — биринчи байланыштан жана кардардын муктаждыктарын аныктоодон баштап, ишке ашырууга жана андан кийинки колдоого чейин.'
                },
                {
                    id: 'marketing',
                    name: 'Айзат Сагынова',
                    position: 'Маркетинг жана контент',
                    experience: 'Tech маркетингде 3+ жыл',
                    video: '/Aizat.mp4',
                    preview: '/Aizat-preview.jpg',
                    gradient: 'from-pink-500 to-rose-500',
                    fullPosition: 'Маркетинг адиси | AI жана бизнес-коммуникациялар',
                    email: 'a.sagynova@evogroup.ai',
                    bio: 'Татаал технологияларды түшүнүктүү окуяларга айландырууга багытталган маркетинг адиси. AI индустриясы менен бизнес-коммуникациялардын кесилишинде иштейт, түшүндүргөн, саткан жана үйрөткөн контент түзөт. Видео сценарийлеринен толук маркетинг кампанияларына чейин — технологиялык компанияларга аудиториясы менен тил табышууга жардам берет. Кыргызстандагы санариптик трансформация долбоорлорунда банктар, ритейл жана мамлекеттик сектор менен иштөө тажрыйбасы бар.'
                }
            ]
        } else {
            return [
                {
                    id: 'lead_dev',
                    name: 'Бегайым Жардамбекова',
                    position: 'Gov & Banks Dept Lead',
                    experience: '10+ лет в IT Tech',
                    video: '/Begaiym.mp4',
                    preview: '/Begaiym-preview.jpg',
                    gradient: 'from-green-500 to-emerald-500',
                    fullPosition: 'Руководитель проектов по банковскому сектору',
                    email: 'b.zhardambekova@evogroup.ai',
                    bio: 'Имеет трёхлетний опыт в сфере цифровизации: начинала работу в ГНС при МФ КР, где участвовала в развитии государственных программных продуктов. В настоящее время работает в частном секторе, занимаясь развитием цифровых решений в банковской сфере. Обладает устойчивой экспертизой в управлении требованиями и создании эффективных IT-сервисов.'
                },
                {
                    id: 'cto',
                    name: 'Аскар Расулов',
                    position: 'Руководитель проектов',
                    experience: '10+ лет в IT Tech',
                    video: '/Askar.mp4',
                    preview: '/Askar-preview.jpg',
                    gradient: 'from-purple-500 to-pink-500',
                    fullPosition: 'Руководитель проектов | Нефтегазовый отдел',
                    email: 'a.rasulov@evogroup.ai',
                    bio: 'Опытный руководитель в IT и нефтегазовом секторе с глубокой экспертизой в цифровой трансформации и корпоративных решениях.'
                },
                {
                    id: 'ceo',
                    name: 'Вадим Беркович',
                    position: 'CEO & AI Architect',
                    experience: '15+ лет в DevTech',
                    video: '/Vadim.mp4',
                    preview: '/Vadim-preview.jpg',
                    gradient: 'from-blue-500 to-cyan-500',
                    fullPosition: 'CEO | Ведущий эксперт по AI, Data Architecture и образовательным системам',
                    email: 'v.berkovich@evogroup.ai',
                    whatsapp: '+996700123456',
                    linkedin: 'https://linkedin.com',
                    bio: 'Архитектор данных и технический лидер с 20+ летним опытом проектирования корпоративных систем. Специализируется на AI-решениях, машинном обучении и модернизации информационных систем. В настоящее время работает над цифровой трансформацией образования в рамках международного EU-проекта в Кыргызстане. Имеет опыт работы в Microsoft Corporation (Мюнхен) и множество наград за инновационные решения.'
                },
                {
                    id: 'sales',
                    name: 'Эльмира Мырзабекова',
                    position: 'Менеджер по продажам | B2B',
                    experience: '3+ лет в B2B продажах',
                    video: '/Elya2.0.mov',
                    preview: '/Elya-preview.jpg',
                    gradient: 'from-orange-500 to-amber-500',
                    fullPosition: 'Менеджер по продажам | B2B | IT и AI-решения',
                    email: 'ely@evogroup.ai',
                    whatsapp: '+996552343333',
                    bio: 'Менеджер по продажам с опытом работы в B2B-сегменте. Специализируется на продаже IT-решений, автоматизации бизнес-процессов и внедрении AI-инструментов. Сопровождает полный цикл сделки — от первого контакта и выявления потребностей клиента до внедрения и дальнейшего сопровождения решений.'
                },
                {
                    id: 'marketing',
                    name: 'Айзат Сагынова',
                    position: 'Маркетинг и контент',
                    experience: '3+ лет в Tech-маркетинге',
                    video: '/Aizat.mp4',
                    preview: '/Aizat-preview.jpg',
                    gradient: 'from-pink-500 to-rose-500',
                    fullPosition: 'Маркетолог | AI и бизнес-коммуникации',
                    email: 'a.sagynova@evogroup.ai',
                    bio: 'Маркетолог, специализирующийся на трансформации сложных технологий в понятные истории. Работает на стыке AI-индустрии и бизнес-коммуникаций, создавая контент который объясняет, продаёт и обучает. От сценариев видеороликов до полноценных маркетинговых кампаний — помогает технологическим компаниям находить язык с их аудиторией. Опыт работы с банками, ритейлом и государственным сектором в проектах цифровой трансформации Кыргызстана.'
                }
            ]
        }
    }

    const translations = getTranslations()
    const teamMembers = getTeamMembers()

    return (
        <section id="team" className="relative py-32 overflow-hidden">
            {/* Section header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90 animate-fade-in">
                    {translations.preTitle}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                    {translations.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
                    {translations.subtitle}
                </p>
            </div>

            {/* Team grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={member.id}
                            isPressable
                            onPress={() => setSelectedMember(member.id)}
                            className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-slide-up cursor-pointer"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <CardBody className="p-6 lg:p-8 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        {'preview' in member && member.preview ? (
                                            <div
                                                className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-blue-500/20 transition-all group-hover:scale-110 duration-500"
                                                onMouseDown={() => setLivePhotoPlaying(member.id)}
                                                onMouseUp={() => setLivePhotoPlaying(null)}
                                                onMouseLeave={() => setLivePhotoPlaying(null)}
                                                onTouchStart={() => setLivePhotoPlaying(member.id)}
                                                onTouchEnd={() => setLivePhotoPlaying(null)}
                                            >
                                                {livePhotoPlaying === member.id && 'video' in member && member.video ? (
                                                    <VideoAvatar
                                                        videoSrc={member.video}
                                                        className="w-full h-full object-cover"
                                                        isPlaying={true}
                                                    />
                                                ) : (
                                                    <img
                                                        src={member.preview}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                        loading="eager"
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <Avatar
                                                name={'initials' in member ? String(member.initials) : undefined}
                                                className={`w-32 h-32 lg:w-36 lg:h-36 text-4xl bg-gradient-to-br ${member.gradient} transition-all duration-500 group-hover:scale-110`}
                                                classNames={{
                                                    base: "ring-4 ring-white/10 group-hover:ring-blue-500/20 transition-all",
                                                    name: "text-white font-bold"
                                                }}
                                            />
                                        )}
                                        {/* Gradient glow effect on hover */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 blur-2xl transition-all duration-500 -z-10" />
                                    </div>
                                </div>
                                <h3 className="text-base lg:text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {member.name.split(' ').map((part, i) => (
                                        <span key={i} className="block">{part}</span>
                                    ))}
                                </h3>
                                <div className="text-blue-400 font-semibold mb-3 text-base">
                                    {member.position}
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {member.experience}
                                </p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Modal */}
            <Modal
                isOpen={selectedMember !== null}
                onClose={() => {
                    setSelectedMember(null)
                }}
                size="5xl"
                backdrop="blur"
                scrollBehavior="inside"
                classNames={{
                    backdrop: "bg-black/80 backdrop-blur-md",
                    base: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 max-w-6xl",
                    body: "p-0",
                    closeButton: "hover:bg-white/10 active:bg-white/20 z-50"
                }}
            >
                <ModalContent>
                    {() => {
                        const member = teamMembers.find(m => m.id === selectedMember)
                        if (!member) return null

                        const getGradientClass = () => {
                            if (selectedMember === 'ceo') return 'from-blue-500 to-cyan-500'
                            if (selectedMember === 'cto') return 'from-purple-500 to-pink-500'
                            if (selectedMember === 'sales') return 'from-orange-500 to-amber-500'
                            if (selectedMember === 'marketing') return 'from-pink-500 to-rose-500'
                            return 'from-green-500 to-emerald-500'
                        }

                        return (
                            <ModalBody>
                                <div className="flex flex-col md:flex-row min-h-[600px]">
                                    {/* Left side - Large Video */}
                                    <div className="w-full md:w-1/2 bg-black/20 flex items-center justify-center p-8">
                                        {'video' in member && member.video ? (
                                            <div className="w-full aspect-square max-w-md rounded-2xl overflow-hidden ring-4 ring-white/10">
                                                <VideoAvatar
                                                    ref={modalVideoRef}
                                                    videoSrc={member.video}
                                                    className="w-full h-full object-cover"
                                                    isPlaying={isVideoPlaying}
                                                    onEnded={() => setIsVideoPlaying(false)}
                                                />
                                            </div>
                                        ) : (
                                            <div className={`w-full aspect-square max-w-md rounded-2xl bg-gradient-to-br ${getGradientClass()} flex items-center justify-center ring-4 ring-white/10`}>
                                                <span className="text-9xl font-bold text-white">
                                                    {'initials' in member ? String(member.initials) : ''}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right side - Content */}
                                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{member.name}</h3>
                                            <p className="text-xl text-blue-400 font-medium mb-2">
                                                {'fullPosition' in member && member.fullPosition ? member.fullPosition : member.position}
                                            </p>
                                            <p className="text-white/60 text-sm">
                                                {member.experience}
                                            </p>
                                        </div>

                                        {/* Bio */}
                                        {'bio' in member && (
                                            <div className="mb-6">
                                                <p className="text-white/80 leading-relaxed text-base">
                                                    {member.bio}
                                                </p>
                                            </div>
                                        )}

                                        {/* Contact Info */}
                                        <div className="space-y-3 mt-auto">
                                            {'email' in member && member.email && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <Link href={`mailto:${member.email}`} className="text-white/80 hover:text-blue-400 transition-colors text-sm">
                                                        {member.email}
                                                    </Link>
                                                </div>
                                            )}

                                            {'whatsapp' in member && member.whatsapp && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                                        </svg>
                                                    </div>
                                                    <Link href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`} target="_blank" className="text-white/80 hover:text-green-400 transition-colors text-sm">
                                                        WhatsApp
                                                    </Link>
                                                </div>
                                            )}

                                            {'linkedin' in member && member.linkedin && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                        </svg>
                                                    </div>
                                                    <Link href={member.linkedin} target="_blank" className="text-white/80 hover:text-blue-500 transition-colors text-sm">
                                                        LinkedIn
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        )
                    }}
                </ModalContent>
            </Modal>
        </section>
    )
}
