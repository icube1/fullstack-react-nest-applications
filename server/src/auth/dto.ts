import { z } from 'zod';

export const CreateVendorDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  companyName: z.string().min(2),
});

export const LoginVendorDto = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const CreateCustomerDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(2),
});

export const LoginCustomerDto = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const CreateEmployeeDto = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    fullName: z.string().min(2),
  })
  
  export const LoginEmployeeDto = z.object({
    email: z.string().email(),
    password: z.string(),
  });

export type CreateVendorDtoType = z.infer<typeof CreateVendorDto>;
export type LoginVendorDtoType = z.infer<typeof LoginVendorDto>;
export type CreateCustomerDtoType = z.infer<typeof CreateCustomerDto>;
export type LoginCustomerDtoType = z.infer<typeof LoginCustomerDto>;
export type CreateEmployeeDtoType = z.infer<typeof CreateEmployeeDto>;
export type LoginEmployeeDtoType = z.infer<typeof LoginEmployeeDto>;