import React, { useState } from 'react';



              export default function Agenda() {

                const [eventos, setEventos] = useState<{ evento: string; data: string }[]>([]);
                const [novoEvento, setNovoEvento] = useState<string>('');
                const [dataEvento, setDataEvento] = useState<string>('');

                const adicionarEvento = () => {
                  if (novoEvento && dataEvento) {
                    const novoEventoObj = {
                      evento: novoEvento,
                      data: dataEvento,
                    };
                    setEventos([...eventos, novoEventoObj]);
                    setNovoEvento('');
                    setDataEvento('');
                  }
                };

                return (
                  <div>
                    <h1>Minha Agenda</h1>

                    <div className="formulario">
                      <input
                        type="text"
                        placeholder="Nome do Evento"
                        value={novoEvento}
                        onChange={(e) => setNovoEvento(e.target.value)}
                      />
                      <input
                        type="date"
                        value={dataEvento}
                        onChange={(e) => setDataEvento(e.target.value)}
                      />
                      <button onClick={adicionarEvento}>Adicionar Evento</button>
                    </div>

                    <ul>
                      {eventos.map((evento, index) => (
                        <li key={index}>
                          <strong>{evento.evento}</strong> - {evento.data}
                        </li>
                      ))}
                    </ul>
                  </div>

              

          );
        }

