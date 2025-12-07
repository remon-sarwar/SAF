import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const types = [
  {
    title: 'Zakat al-Mal',
    desc: 'Zakat on savings, cash, business assets, and investments held for one lunar year.'
  },
  {
    title: 'Zakat on Gold',
    desc: 'Calculated based on the weight and purity of gold. Includes stored or unused jewelry.'
  },
  {
    title: 'Cash & Bank Balance',
    desc: 'Money held in bank accounts, mobile wallets, or as cash savings.'
  },
  {
    title: 'Business Goods',
    desc: 'Inventory, merchandise, and trade goods intended for sale.'
  },
  {
    title: 'Zakat on Investments',
    desc: 'Includes stocks, investment portfolios, and profit-generating assets.'
  }
];

const TypesOfZakat = () => {
  return (
    <SectionWrapper className='bg-brand-soft py-16'>
      <Section>
        <h2 className='text-2xl lg:text-3xl font-bold text-brand-secondary mb-8'>
          Types of Zakat
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {types.map((item, i) => (
            <div
              key={i}
              className='p-6 rounded-xl bg-white shadow-sm border border-sf-neutral-200'
            >
              <h3 className='text-xl font-semibold text-brand-primary'>
                {item.title}
              </h3>
              <p className='mt-2 text-sf-neutral-700'>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default TypesOfZakat;
