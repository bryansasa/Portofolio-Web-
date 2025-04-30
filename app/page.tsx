import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Nama Saya</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#tentang" className="text-sm font-medium hover:text-primary">
              Tentang
            </Link>
            <Link href="#pengalaman" className="text-sm font-medium hover:text-primary">
              Pengalaman
            </Link>
            <Link href="#proyek" className="text-sm font-medium hover:text-primary">
              Proyek
            </Link>
            <Link href="#kontak" className="text-sm font-medium hover:text-primary">
              Kontak
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="tentang" className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Halo, Saya <span className="text-primary">Bryan Gabriel Izaac Sasabone</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Software Engineer dengan pengalaman dalam pengembangan web dan mobile.
            </p>
            <p className="text-muted-foreground">
              Saya adalah seorang software engineer yang berfokus pada pengembangan aplikasi web dan mobile. Saya
              memiliki keahlian dalam JavaScript, React, dan Node.js. Saya senang memecahkan masalah dan menciptakan
              solusi teknologi yang bermanfaat.
            </p>
            <div className="flex gap-4 pt-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Hubungi Saya
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="h-64 w-64">
              <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Foto Profil" />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Pengalaman Organisasi */}
        <section id="pengalaman" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Pengalaman Organisasi</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ketua Divisi Teknologi</CardTitle>
                <CardDescription>Organisasi Mahasiswa Teknik Informatika | 2021 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Memimpin tim pengembangan website dan aplikasi untuk kebutuhan organisasi. Mengelola proyek teknologi
                  dan mengkoordinasikan tim developer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Asisten Laboratorium Pemrograman</CardTitle>
                <CardDescription>Fakultas Ilmu Komputer | 2020 - 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Membantu mahasiswa dalam praktikum pemrograman dasar dan struktur data. Membuat modul praktikum dan
                  mengevaluasi tugas mahasiswa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Anggota Komunitas Developer</CardTitle>
                <CardDescription>Google Developer Student Club | 2019 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Berpartisipasi dalam workshop dan hackathon. Berkontribusi dalam proyek open source dan berbagi
                  pengetahuan dengan komunitas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer IT</CardTitle>
                <CardDescription>Seminar Nasional Teknologi | 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Membantu persiapan teknis untuk seminar nasional. Mengelola sistem registrasi dan dokumentasi acara.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Proyek/Penelitian */}
        <section id="proyek" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Proyek & Penelitian</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Aplikasi Manajemen Tugas</CardTitle>
                <CardDescription>Web App | 2022</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Aplikasi Manajemen Tugas"
                  width={400}
                  height={200}
                  className="rounded-md mb-4 object-cover w-full"
                />
                <p className="text-muted-foreground mb-4">
                  Aplikasi web untuk manajemen tugas dengan fitur kolaborasi tim dan notifikasi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lihat Proyek
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Sistem Informasi Akademik</CardTitle>
                <CardDescription>Web App | 2021</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sistem Informasi Akademik"
                  width={400}
                  height={200}
                  className="rounded-md mb-4 object-cover w-full"
                />
                <p className="text-muted-foreground mb-4">
                  Sistem informasi untuk pengelolaan data akademik mahasiswa dan dosen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Laravel</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Bootstrap</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lihat Proyek
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Penelitian Machine Learning</CardTitle>
                <CardDescription>Penelitian | 2020</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Penelitian Machine Learning"
                  width={400}
                  height={200}
                  className="rounded-md mb-4 object-cover w-full"
                />
                <p className="text-muted-foreground mb-4">
                  Penelitian tentang penerapan algoritma machine learning untuk prediksi data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>Jupyter</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Baca Penelitian
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Kontak</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col items-center p-6">
              <Mail className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl mb-2">Email</CardTitle>
              <CardDescription className="text-center">email@example.com</CardDescription>
            </Card>

            <Card className="flex flex-col items-center p-6">
              <Linkedin className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl mb-2">LinkedIn</CardTitle>
              <CardDescription className="text-center">linkedin.com/in/namasaya</CardDescription>
            </Card>

            <Card className="flex flex-col items-center p-6">
              <Github className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl mb-2">GitHub</CardTitle>
              <CardDescription className="text-center">github.com/namasaya</CardDescription>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Nama Saya. Semua hak dilindungi.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
