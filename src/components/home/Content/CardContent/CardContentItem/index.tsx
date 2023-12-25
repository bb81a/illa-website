import style from './index.module.css';
import LearnMore from '../LearnMore';
import clsx from 'clsx';
import { useUtmParams } from '@site/src/hooks/useUtmParams';

const CardContentItem = ({
  imageIcon,
  stepNum,
  title,
  desc,
  moreTitle,
  moreHref,
  reverse,
}) => {
  const utmUrl = useUtmParams(moreHref);

  return (
    <div className={style.borderStyle}>
      <div
        className={clsx(
          style.cardIContentItemContainerStyle,
          reverse ? style.cardContentItemReverseStyle: style.cardContentItemNormalStyle,
        )}
      >
        {imageIcon}
        <div className={style.textContainerStyle}>
          <h2 className={style.textTitleStye}>
            <span className={style.textTitleNumStye}>{stepNum}.</span>
            <br />
            <span>{title}</span>
          </h2>
          <span className={style.textDescStyle}>{desc}</span>
          <LearnMore title={moreTitle} href={utmUrl ?? ''} />
        </div>
      </div>
    </div>
  );
};
export default CardContentItem;
