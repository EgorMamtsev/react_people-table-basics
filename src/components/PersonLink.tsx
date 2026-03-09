import { Link } from 'react-router-dom';
import { Person } from '../types/Person';
import classNames from 'classnames';

type Props = {
  name: string | null;
  people: Person[];
};

export const PersonLink = ({ name, people }: Props) => {
  if (!name) {
    return '-';
  }

  const person = people.find(p => p.name === name);

  if (!person) {
    return name;
  }

  return (
    <Link
      to={`../${person.slug}`}
      className={classNames({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {name}
    </Link>
  );
};
