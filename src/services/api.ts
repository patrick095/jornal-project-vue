
function delay (millis = 600): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, millis))
}
interface Page {
    number: number;
    sector: 'edição' | 'revisão';
    worker: string;
    status: 'aberto' | 'trabalhando' | 'concluido'
}
interface IpagesStatus {
    [index: number]: Page
}
interface response {
    totalPages: number;
    pageStatus: IpagesStatus;
}
export async function getData (day: number): Promise<response> {
  await delay()
  console.log('resposta')
  let res: response
  if (day === 0) {
    res = {
      totalPages: 24,
      pageStatus: [
        { number: 1, sector: 'edição', worker: 'Fulano', status: 'aberto' },
        { number: 4, sector: 'edição', worker: 'Sicrano', status: 'aberto' },
        { number: 15, sector: 'edição', worker: 'Deltrano', status: 'aberto' },
        { number: 7, sector: 'revisão', worker: 'Revisor 1', status: 'trabalhando' },
        { number: 22, sector: 'revisão', worker: 'Revisor 2', status: 'concluido' }
      ]
    }
  } else if (day >= 1) {
    res = {
      totalPages: 24,
      pageStatus: [
        { number: 3, sector: 'edição', worker: 'Fulano', status: 'aberto' },
        { number: 5, sector: 'edição', worker: 'Sicrano', status: 'aberto' },
        { number: 12, sector: 'edição', worker: 'Deltrano', status: 'aberto' },
        { number: 17, sector: 'revisão', worker: 'Revisor 1', status: 'trabalhando' },
        { number: 22, sector: 'revisão', worker: 'Revisor 2', status: 'concluido' }
      ]
    }
  } else {
    res = {
      totalPages: 0,
      pageStatus: []
    }
  }
  return res
}
