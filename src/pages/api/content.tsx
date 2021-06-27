import { NextApiRequest, NextApiResponse } from 'next'

interface IErrorResponse {
  error: string
}

interface ILesson {
  id: number
  name: string
  time: number
  content: string
  done: boolean
  next: number
}

interface ISuccessResponse {
  name: string
  lessons: ILesson[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IErrorResponse | ISuccessResponse>
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const name = 'Next.js - Guia Completo 2021'
      const lessons = [
        {
          id: 0,
          name: 'NEXT.JS',
          time: 16,
          content:
            'https://www.youtube.com/watch?v=9eI0o8io7I0&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=1',
          done: false,
          next: 1
        },
        {
          id: 1,
          name: 'ENTENDENDO SSR',
          time: 46,
          content:
            'https://www.youtube.com/watch?v=SIrZ6pX-XjE&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=2',
          done: false,
          next: 2
        },
        {
          id: 2,
          name: 'ROTAS ESTÁTICAS E DINÂMICAS',
          time: 11,
          content:
            'https://www.youtube.com/watch?v=HE_JHu4DkGo&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=3',
          done: false,
          next: 3
        },
        {
          id: 3,
          name: 'INTEGRAÇÃO COM TYPESCRIPT',
          time: 11,
          content:
            'https://www.youtube.com/watch?v=Z27sJSFZ9k8&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=4',
          done: false,
          next: 4
        },
        {
          id: 4,
          name: 'CUSTOMIZANDO MEU APP',
          time: 17,
          content:
            'https://www.youtube.com/watch?v=hUQx74jLZG8&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=5',
          done: false,
          next: 5
        },
        {
          id: 5,
          name: 'CRIANDO E CONSUMINDO APIs',
          time: 31,
          content:
            'https://www.youtube.com/watch?v=3Eam3ogU-uk&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=6',
          done: false,
          next: 6
        },
        {
          id: 6,
          name: 'UTILIZANDO VARIÁVEIS DE AMBIENTE',
          time: 16,
          content:
            'https://www.youtube.com/watch?v=KCujq1URx2E&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=7',
          done: false,
          next: 7
        },
        {
          id: 7,
          name: 'PUBLICAR APLICAÇÕES',
          time: 16,
          content:
            'https://www.youtube.com/watch?v=eg9yLyb8mdM&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=8',
          done: false,
          next: 0
        }
      ]
      res.status(200).json({ name, lessons })
    } catch (err) {
      res
        .status(400)
        .json({ error: 'Desculpe, houve um problema no servidor.' })
    }
  } else {
    res.status(400).json({ error: 'Desculpe, precisa ser uma requisição get.' })
  }
}
