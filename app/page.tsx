"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
  {
    title: "Agendamentos Inteligentes",
    description: "Otimize sua rotina com automações de agendamento, confirmação e lembretes para seus clientes.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Análises Avançadas",
    description: "Acompanhe seu desempenho com dashboards de faturamento, retenção de clientes e muito mais.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Gestão de Equipe Eficiente",
    description: "Organize sua equipe, distribua atendimentos e acompanhe a produtividade em tempo real.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Segurança de Dados",
    description: "Proteja as informações dos seus clientes com segurança de nível empresarial e backups automáticos.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Integrações Poderosas",
    description: "Conecte seu negócio às redes sociais, sistemas de pagamento e marketing de forma simples.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "Suporte Humano 24/7",
    description: "Conte com uma equipe de especialistas pronta para te ajudar em qualquer momento do seu dia.",
    icon: <Star className="size-5" />,
  },
];


  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
  <Image
    src="/logo.png"
    alt="Logo Beauty Day"
    width={120}
    height={100}
    className="rounded-lg"
  />
  <span className="text-2xl text-foreground">BeautyDay</span>
</div>

          <nav className="hidden md:flex gap-8 justify-center items-center">
            <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Sobre
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Serviços
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Depoimentos
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Alternar tema</span>
            </Button>
            <Button className="rounded-full c-[]">
              Conhecer agora
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b">
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Sobre
              </Link>
              <Link href="#services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Depoimentos
              </Link>
              <Link href="#contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Button className="rounded-full"
                style={{ backgroundColor: "rgb(156 29 170)" }}>
                  Conhecer agora
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Novo na Beauty Day
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Sua autoestima tem um app, e é
                </span>
                <span className="bg-gradient-to-r color-pink from-pink-500 to-pink-400 bg-clip-text font-bold"
                  style={{ color: "rgb(156 29 170)" }}>
                  {' '}Beauty Day!
                </span>
              </h1>


              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agende serviços de beleza com facilidade, praticidade e eleve sua autoestima com a Beauty Day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  conhecer agora
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  Fale conosco
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Diversos prêmios</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>100% Gratuito</span>
                </div>
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="relative mx-auto w-[380px] h-[600px] md:w-[420px] md:h-[800px]"
>
  {/* Moldura do celular */}
  <div className="relative w-full h-full rounded-[3rem] border-8 border-neutral-800 dark:border-neutral-200 bg-black shadow-2xl flex items-center justify-center">

    {/* Notch */}
    <div className="absolute top-0 w-full flex justify-center z-10">
      <div className="h-10 w-28 rounded-b-[1.5rem] bg-neutral-900 dark:bg-white/20"></div>
    </div>

    {/* Tela */}
    <div className="video-motion w-[970%] h-[100%] rounded-[2.5rem] overflow-hidden bg-neutral-950">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

    {/* Vidro/Contorno sutil */}
    <div className="absolute inset-[6%] rounded-[2rem] ring-1 ring-black/10 dark:ring-white/10 pointer-events-none"></div>
  </div>

  {/* Glow decorativo */}
  <div className="absolute -bottom-8 -right-8 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
  <div className="absolute -top-8 -left-8 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
</motion.div>

          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Utilizado por diversas pessoas em todo Brasil!</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
  <div className="container px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        Potencial Inovador
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Revolucionando a Estética e Beleza Onde Você Estiver
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Desenvolvido para transformar o cenário da estética e beleza, nosso aplicativo oferece uma experiência
        ágil, inteligente e acessível. Com uma equipe altamente qualificada e processos otimizados, garantimos
        eficiência, praticidade e inovação, conectando profissionais e clientes em qualquer lugar.
      </p>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={item}>
          <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
  <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

  <div className="container px-4 md:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        Como Funciona
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Gestão Simples, Resultados Incríveis
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Com poucos passos, você leva seu negócio de estética e beleza a um novo nível de eficiência, organização e profissionalismo.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

      {[
        {
          step: "01",
          title: "Crie sua Conta",
          description:
            "Cadastre-se de forma rápida e comece a transformar sua gestão sem precisar de cartão de crédito.",
        },
        {
          step: "02",
          title: "Configure seu Espaço",
          description:
            "Personalize os serviços, agenda, equipe e tudo o que seu espaço de estética precisa para rodar perfeitamente.",
        },
        {
          step: "03",
          title: "Atenda de Onde Estiver",
          description:
            "Gerencie agendamentos, pagamentos e atendimento de forma simples, com suporte de uma equipe especializada sempre ao seu lado.",
        },
      ].map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative z-10 flex flex-col items-center text-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
            {step.step}
          </div>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32 bg-background">
  <div className="container px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        Depoimentos
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Profissionais Que Transformaram Seus Negócios
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Veja como nosso aplicativo está ajudando esteticistas, salões e clínicas a otimizar suas rotinas, aumentar seus resultados e oferecer uma experiência impecável aos clientes.
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: "Juliana Ferreira",
          role: "Esteticista Autônoma",
          comment:
            "O aplicativo mudou minha vida! Consigo gerenciar meus horários, clientes e pagamentos de qualquer lugar. Me sinto muito mais profissional e organizada.",
        },
        {
          name: "Studio Belle Femme",
          role: "Clínica de Estética",
          comment:
            "Simplesmente indispensável! Nossa equipe trabalha com muito mais eficiência, eliminamos os erros nos agendamentos e ainda recebemos elogios dos clientes pela organização.",
        },
        {
          name: "Lucas Martins",
          role: "Barbearia Urban Style",
          comment:
            "O suporte é excelente e a plataforma super intuitiva. Meu negócio ficou mais leve de administrar, e hoje tenho mais tempo para focar no atendimento.",
        },
      ].map((testimonial, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="rounded-2xl border bg-card p-6 shadow-sm flex flex-col h-full"
        >
          <div className="flex-1">
            <p className="text-base text-muted-foreground">&ldquo;{testimonial.comment}&rdquo;</p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
  <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

  <div className="container px-4 md:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        Planos
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simples, Transparente e Sem Surpresas</h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Escolha o plano ideal para o seu negócio de estética. Todos os planos incluem 14 dias grátis, sem compromisso.
      </p>
    </motion.div>

    <div className="mx-auto max-w-5xl">
      <Tabs defaultValue="monthly" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="rounded-full p-1">
            <TabsTrigger value="monthly" className="rounded-full px-6">
              Mensal
            </TabsTrigger>
            <TabsTrigger value="annually" className="rounded-full px-6">
              Anual (Economize 20%)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Mensal */}
        <TabsContent value="monthly">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: "Essencial",
                price: "R$ 39",
                description: "Perfeito para profissionais autônomos começando sua jornada.",
                features: [
                  "Agenda online ilimitada",
                  "Gestão de clientes",
                  "Relatórios básicos",
                  "Suporte por e-mail",
                ],
                cta: "Testar Grátis",
              },
              {
                name: "Profissional",
                price: "R$ 99",
                description: "Ideal para clínicas e salões em crescimento.",
                features: [
                  "Agenda ilimitada",
                  "Gestão financeira",
                  "Dashboard de performance",
                  "Até 5 colaboradores",
                  "Suporte prioritário",
                  "Integração com WhatsApp",
                ],
                cta: "Testar Grátis",
                popular: true,
              },
              {
                name: "Premium",
                price: "R$ 249",
                description: "Para negócios que precisam de máxima eficiência.",
                features: [
                  "Colaboradores ilimitados",
                  "Gestão completa de estoque",
                  "Relatórios avançados",
                  "Integração com API",
                  "Suporte 24/7 (WhatsApp + Telefone)",
                  "Treinamento personalizado",
                ],
                cta: "Falar com Vendas",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden h-full ${
                    plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                  } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Mais Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                    <ul className="space-y-3 my-6 flex-grow">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="mr-2 size-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-auto rounded-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Anual */}
        <TabsContent value="annually">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: "Essencial",
                price: "R$ 31",
                description: "Perfeito para profissionais autônomos começando sua jornada.",
                features: [
                  "Agenda online ilimitada",
                  "Gestão de clientes",
                  "Relatórios básicos",
                  "Suporte por e-mail",
                ],
                cta: "Testar Grátis",
              },
              {
                name: "Profissional",
                price: "R$ 79",
                description: "Ideal para clínicas e salões em crescimento.",
                features: [
                  "Agenda ilimitada",
                  "Gestão financeira",
                  "Dashboard de performance",
                  "Até 5 colaboradores",
                  "Suporte prioritário",
                  "Integração com WhatsApp",
                ],
                cta: "Testar Grátis",
                popular: true,
              },
              {
                name: "Premium",
                price: "R$ 199",
                description: "Para negócios que precisam de máxima eficiência.",
                features: [
                  "Colaboradores ilimitados",
                  "Gestão completa de estoque",
                  "Relatórios avançados",
                  "Integração com API",
                  "Suporte 24/7 (WhatsApp + Telefone)",
                  "Treinamento personalizado",
                ],
                cta: "Falar com Vendas",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden h-full ${
                    plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                  } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Mais Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                    <ul className="space-y-3 my-6 flex-grow">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="mr-2 size-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-auto rounded-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
  <div className="container px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        FAQ
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Encontre perguntas frequentes e suas respostas. Se você não encontrar o que procura, entre em contato conosco!
      </p>
    </motion.div>

    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            question: "Como funciona o BeautyDay?",
            answer:
              "O BeautyDay é um aplicativo que conecta clientes a profissionais de beleza. Você pode agendar serviços como cabelo, unhas, estética e maquiagem diretamente pelo app, escolhendo dia, horário e profissional de sua preferência.",
          },
          {
            question: "Preciso pagar para usar o aplicativo?",
            answer:
              "O download e o uso básico do BeautyDay são gratuitos para clientes. Você só paga pelos serviços que contratar. Profissionais e salões podem escolher entre planos gratuitos e pagos com funcionalidades avançadas.",
          },
          {
            question: "Posso cancelar um agendamento?",
            answer:
              "Sim! Você pode cancelar ou reagendar seu serviço diretamente pelo app. No entanto, é importante verificar a política de cancelamento de cada profissional, pois alguns podem cobrar taxas se o cancelamento ocorrer muito próximo ao horário marcado.",
          },
          {
            question: "É seguro fazer pagamentos pelo aplicativo?",
            answer:
              "Sim. Todos os pagamentos são processados por plataformas de pagamento seguras e certificadas. Seus dados estão protegidos com criptografia de ponta a ponta.",
          },
          {
            question: "Quais serviços estão disponíveis no BeautyDay?",
            answer:
              "O BeautyDay oferece uma ampla variedade de serviços, incluindo: cabeleireiro, manicure, pedicure, maquiagem, design de sobrancelhas, estética facial e corporal, depilação e muito mais.",
          },
          {
            question: "Posso escolher ser atendido em casa?",
            answer:
              "Sim! Muitos profissionais oferecem a opção de atendimento em domicílio. Basta selecionar essa opção ao fazer seu agendamento, se disponível.",
          },
          {
            question: "Sou profissional de beleza, como faço para me cadastrar?",
            answer:
              "Basta baixar o app BeautyDay, escolher a opção 'Sou profissional', preencher seus dados, cadastrar seus serviços e disponibilizar seus horários. Em poucos minutos você já pode começar a receber agendamentos.",
          },
          {
            question: "Existe suporte caso eu tenha problemas?",
            answer:
              "Claro! Oferecemos suporte via chat dentro do aplicativo, além de atendimento por e-mail e WhatsApp em horário comercial. Profissionais no plano Enterprise têm acesso a suporte prioritário.",
          },
          {
            question: "O BeautyDay funciona na minha cidade?",
            answer:
              "O BeautyDay está disponível em diversas cidades do Brasil e está em constante expansão. Ao entrar no app, você pode verificar os profissionais disponíveis na sua região.",
          },
          {
            question: "Meus dados estão seguros no BeautyDay?",
            answer:
              "Totalmente. Valorizamos sua privacidade. Todos os dados são armazenados de forma segura, seguindo as normas da LGPD (Lei Geral de Proteção de Dados).",
          },
        ].map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

  <div className="container px-4 md:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Agende sua beleza com facilidade
      </h2>
      <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
        Descubra o <strong>BeautyDay</strong>, o app que conecta você aos melhores profissionais de beleza. Agende serviços de cabelo, unhas, estética e muito mais, tudo na palma da sua mão.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
          Baixar App
          <ArrowRight className="ml-2 size-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
        >
          Saiba Mais
        </Button>
      </div>
      <p className="text-sm text-primary-foreground/80 mt-4">
        É gratuito para baixar. Comece hoje mesmo a transformar sua rotina de beleza.
      </p>
    </motion.div>
  </div>
</section>

      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  S
                </div>
                <span>SaaSify</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your workflow with our all-in-one SaaS platform. Boost productivity and scale your business.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
