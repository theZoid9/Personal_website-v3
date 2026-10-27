import React, { useState } from 'react';

export default function MintTin() {
  const [mintTaken, setMintTaken] = useState(false);

  return (
    <div className="coffee-mints">
      <button
        type="button"
        className={'mint-tin' + (mintTaken ? ' mint-tin-open' : '')}
        aria-label={mintTaken ? 'Take another mint' : 'Take a mint for coffee breath'}
        onClick={() => setMintTaken(true)}
      >
        <span className="mint-tin-body" aria-hidden="true">
          <span className="mint-piece mint-piece-one" />
          <span className="mint-piece mint-piece-two" />
          <span className="mint-tin-lid">MINTS</span>
        </span>
      </button>
      <div className="mint-copy">
        <strong>Mints for coffee breath.</strong>
      </div>
    </div>
  );
}
