import * as S from './styles'

type Props = {
  shows: string;
}

type Show = {
  show: string;
  local: string;
  date: string;
}

export const Shows = ({ shows }: Props) => {
  const showsJson: Show[] = JSON.parse(shows)

  if (!showsJson.length) return null

  return (
    <S.Container>
      <h1>Shows</h1>
      <div className="shows">
        {showsJson.map((show, index) => (
          <div key={index} className="show">
            <h2>{show.show}</h2>
            <p>{show.local}</p>
            <p>{show.date}</p>
          </div>
        ))}
      </div>
    </S.Container>
  )
}
