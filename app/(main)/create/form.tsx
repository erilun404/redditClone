'use client'

import {useMutation} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { createPost } from '@/actions/create-post'
import { postSchema } from '@/actions/schemas'


//type FormInputs = z.infer<typeof postSchema>;

export const CreatePostForm = () => {
    const {mutate, error, isPending} = useMutation({
        mutationFn: createPost,
        onError: (error) => console.log(error.message)
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<z.infer<typeof postSchema>>({
        resolver: zodResolver(postSchema),
    })

    return (
        <form onSubmit={handleSubmit((values) => mutate(values))}>
        <input {...register('title')} placeholder='title'/>
        <input {...register('content')} placeholder='content'/>
        <button type='submit' disabled={isPending}>
            {isPending ? 'saving..' : 'saved'}
        </button>
        </form>
    )
}

