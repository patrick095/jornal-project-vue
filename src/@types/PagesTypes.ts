
export type Page = {
    number: number;
    sector: 'edição' | 'revisão' | 'admin';
    worker: string;
    status: 'aberto' | 'trabalhando' | 'concluido';
  }
export type IpagesStatus = Page[]
export type Response = {
    totalPages: number;
    pagesStatus: IpagesStatus;
}
