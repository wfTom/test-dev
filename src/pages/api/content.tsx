import { NextApiRequest, NextApiResponse } from 'next'

interface IErrorResponse {
  error: string
}

interface ILessons {
  id: number
  name: string
  time: string
  content: string
  done: boolean
  next: number
}

interface ISuccessResponse {
  name: string
  lessons: ILessons[]
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
          id: 1,
          name: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
          time: '16:29',
          content:
            'https://www.youtube.com/watch?v=9eI0o8io7I0&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=1',
          done: false,
          next: 2
        },
        {
          id: 2,
          name: 'NEXT.JS: ENTENDENDO A RENDERIZAÇÃO REACT NO LADO SERVIDOR [PARTE #02]',
          time: '46:21',
          content:
            'https://www.youtube.com/watch?v=SIrZ6pX-XjE&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=2',
          done: false,
          next: 3
        },
        {
          id: 3,
          name: 'NEXT.JS: ROTAS ESTÁTICAS E DINÂMICAS [PARTE #03]',
          time: '11:58',
          content:
            'https://www.youtube.com/watch?v=HE_JHu4DkGo&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=3',
          done: false,
          next: 4
        },
        {
          id: 4,
          name: 'NEXT.JS: INTEGRAÇÃO COM TYPESCRIPT [PARTE #04]',
          time: '11:44',
          content:
            'https://www.youtube.com/watch?v=Z27sJSFZ9k8&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=4',
          done: false,
          next: 5
        },
        {
          id: 5,
          name: 'NEXT.JS: CUSTOMIZANDO MEU APP (_app e _document) [PARTE #05]',
          time: '17:31',
          content:
            'https://www.youtube.com/watch?v=hUQx74jLZG8&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=5',
          done: false,
          next: 6
        },
        {
          id: 6,
          name: 'NEXT.JS: CRIANDO E CONSUMINDO APIs [PARTE #06]',
          time: '31:14',
          content:
            'https://www.youtube.com/watch?v=3Eam3ogU-uk&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=6',
          done: false,
          next: 7
        },
        {
          id: 7,
          name: 'NEXT.JS: UTILIZANDO VARIÁVEIS DE AMBIENTE [PARTE #07]',
          time: '16:08',
          content:
            'https://www.youtube.com/watch?v=KCujq1URx2E&list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s&index=7',
          done: false,
          next: 8
        },
        {
          id: 8,
          name: 'NEXT.JS: PUBLICAR APLICAÇÕES NUNCA FOI TÃO FÁCIL [PARTE #08]',
          time: '16:51',
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
    res.status(400).json({ error: 'Desculpe, houve um problema no servidor.' })
  }
}
