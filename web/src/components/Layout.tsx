// src/components/Layout.tsx
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { ThemeToggle } from './ui/theme-toggle'
import { cn } from '../lib/utils'
import React from "react";

interface NavItemProps {
    to: string
    children: React.ReactNode
    className?: string
}

const NavItem = ({ to, children, className }: NavItemProps) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link to={to}>
            <Button
                variant={isActive ? "default" : "ghost"}
                className={cn("font-medium", className)}
            >
                {children}
            </Button>
        </Link>
    )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-16 items-center">
                    <div className="mr-4 md:flex">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold">boostem</span>
                        </Link>
                    </div>
                    <nav className="flex items-center ml-auto space-x-1">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/projects">Projects</NavItem>
                        {/*<NavItem to="/dj">DJ</NavItem>*/}
                        <NavItem to="/resume">Resume</NavItem>
                        {/*<NavItem to="/contact">Contact</NavItem>*/}
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="py-6 border-t">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} boostem. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to="https://github.com/boostem" className="text-muted-foreground hover:text-foreground">
                            GitHub
                        </Link>
                        <Link to="https://linkedin.com/in/boostem" className="text-muted-foreground hover:text-foreground">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout// update 12967
// update 4881
// update 18615
// update 25701
// update 8903