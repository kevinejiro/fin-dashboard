import React, { useState } from 'react';
import type { QuickTransferContact } from '../../../types/data';
import Button from '../../common/Button/Button'; 
import InputField from '../../common/InputField/InputField';
import Card from '../../common/Card/Card';

interface QuickTransferProps {
  contacts: QuickTransferContact[];
}

const QuickTransfer: React.FC<QuickTransferProps> = ({ contacts }) => {
  const [transferAmount, setTransferAmount] = useState('');
  const [selectedContactId, setSelectedContactId] = useState<string | null>(contacts[0]?.id || null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic validation to only allow numbers and one decimal point
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setTransferAmount(value);
    }
  };

  const handleSend = () => {
    if (!selectedContactId) {
      alert('Please select a contact.');
      return;
    }
    if (!transferAmount || parseFloat(transferAmount) <= 0) {
      alert('Please enter a valid transfer amount.');
      return;
    }

    const selectedContact = contacts.find(c => c.id === selectedContactId);
    console.log(`Transfer $${transferAmount} to ${selectedContact?.name} (UI Only)`);
    alert(`Transferred $${transferAmount} to ${selectedContact?.name || 'selected contact'}! (UI Only)`);

    setTransferAmount('');
  };

  return (
    <Card title='Quick Transfer' className='flex flex-col h-[24rem]'>

      {contacts.length === 0 ? (
        <p className="text-gray-500 mb-4">No quick transfer contacts available.</p>
      ) : (
        <>
          <div className="flex space-x-3 overflow-x-auto pb-3 -mb-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex-shrink-0 text-center cursor-pointer p-2 rounded-lg transition-colors
                  ${selectedContactId === contact.id ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'hover:bg-gray-100'}`}
                onClick={() => setSelectedContactId(contact.id)}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <InputField
              label="Amount"
              id="transferAmount"
              name="transferAmount"
              type="text"
              placeholder="0.00"
              value={transferAmount}
              onChange={handleAmountChange}
              inputClassName="text-2xl font-bold text-center"
            />
            <Button
              onClick={handleSend}
              variant="primary"
              className="w-full mt-4"
              disabled={!selectedContactId || parseFloat(transferAmount) <= 0}
            >
              Send
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default QuickTransfer;