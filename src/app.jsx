import React, { useState } from 'react';
import Gallery from 'Gallery';

const App = () => {
    return (
        <div className="app-container">
          <header className="app-header">
            <h1>Tour Comparison App</h1>
          </header>
          <main>
            <Gallery />
          </main>
        </div>
      );
    };
