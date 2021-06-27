import { IpagesStatus } from '../@types/PagesTypes'

function delay (millis = 600): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, millis))
}

interface response {
    totalPages: number;
    pagesStatus: IpagesStatus;
}
let Segunda: IpagesStatus = [
  { number: 1, sector: 'edição', worker: 'Fulano', status: 'aberto' },
  { number: 4, sector: 'edição', worker: 'Sicrano', status: 'aberto' },
  { number: 15, sector: 'edição', worker: 'Deltrano', status: 'aberto' },
  { number: 7, sector: 'revisão', worker: 'Revisor 1', status: 'aberto' },
  { number: 22, sector: 'revisão', worker: 'Revisor 2', status: 'concluido' }
]
let Terca: IpagesStatus = [
  { number: 3, sector: 'edição', worker: 'Fulano', status: 'aberto' },
  { number: 5, sector: 'edição', worker: 'Sicrano', status: 'aberto' },
  { number: 12, sector: 'edição', worker: 'Deltrano', status: 'aberto' },
  { number: 17, sector: 'revisão', worker: 'Revisor 1', status: 'aberto' },
  { number: 22, sector: 'revisão', worker: 'Revisor 2', status: 'concluido' }
]
export async function getData (day: number): Promise<response> {
  await delay()
  let res: response
  if (day === 0) {
    res = {
      totalPages: 24,
      pagesStatus: Segunda
    }
  } else if (day >= 1) {
    res = {
      totalPages: 24,
      pagesStatus: Terca
    }
  } else {
    res = {
      totalPages: 0,
      pagesStatus: []
    }
  }
  return res
}
export async function postData (data: response, day: number): Promise<response> {
  console.log('post!!')
  console.log(data)
  await delay()
  if (day === 0) {
    Segunda = data.pagesStatus
  } else {
    Terca = data.pagesStatus
  }
  return data
}
