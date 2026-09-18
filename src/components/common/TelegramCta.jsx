import { FaTelegram } from 'react-icons/fa6';
import Button from './Button';
import { SITE } from '../../lib/constants';

/**
 * Primary conversion CTA.
 * When VITE_AFFILIATE_JOIN_URL is set, links to the Next affiliate /join flow;
 * otherwise falls back to Telegram.
 */
export default function TelegramCta({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  iconPosition = 'left',
  productId,
  ...props
}) {
  const useAffiliate = Boolean(SITE.affiliateJoinUrl);
  const href = useAffiliate
    ? `${SITE.affiliateJoinUrl.replace(/\/$/, '')}${
        productId ? `?product=${productId}` : ''
      }`
    : SITE.telegramUrl;

  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      icon={useAffiliate ? undefined : FaTelegram}
      iconPosition={iconPosition}
      className={className}
      aria-label={
        useAffiliate
          ? 'Join 100xBull mentorship'
          : `Open Telegram ${SITE.telegramHandle}`
      }
      {...props}
    >
      {children ||
        (useAffiliate
          ? 'Join Mentorship'
          : `Telegram ${SITE.telegramHandle}`)}
    </Button>
  );
}
