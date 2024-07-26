"use client"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"

const ContactForm = () => {

    const [successForm, setSuccessForm] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string().min(2).max(50)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const resp = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values)
        })

        if(resp.status === 200){
            setSuccessForm(true)
        }

    }

    return(
        <div>
            { successForm 
                ? ( <h4>Formularo enviado con exito</h4> )
                : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                placeholder="Nombre" 
                                                {...field} 
                                                className="dark:bg-slate-800"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                placeholder="Nombre" 
                                                {...field} 
                                                className="dark:bg-slate-800"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea  
                                                placeholder="Escribe tu mensaje..." 
                                                {...field} 
                                                className="dark:bg-slate-800"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <Button type="submit">Enviar</Button>
                        </form>
                    </Form>
                )
            }
        </div>
    )
}

export default ContactForm