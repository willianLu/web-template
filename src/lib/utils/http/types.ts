import { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * @description 自定义请求配置参数
 */
export type CustomAxiosRequestConfig<T = any> = AxiosRequestConfig<T> & {
  originDomain?: string
  skipCommonData?: boolean
  isFormData?: boolean
  backOriginResponse?: boolean
}

/**
 * @description 默认请求返回数据
 */
export interface CustomResponseData<T = any> {
  code: number
  message: string
  data: T
}

type BackData<T> = CustomResponseData<T>

export type RequestBackData<T, D, U> = U extends 'origin'
  ? AxiosResponse<BackData<T>, D>
  : BackData<T>
