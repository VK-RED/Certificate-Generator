import z from 'zod'

export interface GenerateCertProps{
    userName:string,
    certificateId: string,
}

export interface CertificateRendererProps{
    pdfDataUri: string,
}

export const CreateCert = z.object({
    name: z.string().min(3,"Name should have atleast 3 letters").max(25, "Name can be atmost 25 letters"),
    email: z.string().min(11,"Email should be atleast 11 letters").max(40, "Email can be atmost 40 letters")
})

export type CreateCertProps = z.infer<typeof CreateCert>;