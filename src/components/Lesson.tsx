import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDate = format(
    props.availableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const formattedAvailableDate = formatDate(availableDate);

  function formatDate(availableDate: string) {
    const capitalizedString =
      availableDate[0].toUpperCase() + availableDate.slice(1);

    const formattedString = capitalizedString.replace('-feira', '');

    return formattedString;
  }

  return (
    <a href={props.slug}>
      <span className='text-gray-300'>{formattedAvailableDate}</span>

      <div className='rounded p-4 border border-gray-500 mt-2'>
        <header className='flex items-center justify-between mb-4'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className='text-xs py-[0.125rem] px-2 text-white border border-green-300 rounded font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong>{props.title}</strong>
      </div>
    </a>
  );
}
