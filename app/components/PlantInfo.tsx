import { FC } from 'react';

interface PlantInfoProps {
  info: string;
  imageUrl?: string; // Optional prop for the plant image URL
}

const PlantInfo: FC<PlantInfoProps> = ({ info, imageUrl }) => {
  // Helper function to parse and format the information
  const parseInfo = (info: string) => {
    const sections = info.split('\n').filter(line => line.trim() !== '');
    const data: { [key: string]: string } = {};

    sections.forEach((line) => {
      if (line.startsWith('1.')) {
        data['Plant Name'] = line.replace('1.', '').replace('**Plant Name:**', '').trim();
      } else if (line.startsWith('2.')) {
        data['Scientific Name'] = line.replace('2.', '').replace('**Scientific Name:**', '').trim();
      } else if (line.startsWith('3.')) {
        data['Family'] = line.replace('3.', '').replace('**Family:**', '').trim();
      } else if (line.startsWith('4.')) {
        data['Native Region'] = line.replace('4.', '').replace('**Native Region:**', '').trim();
      } else if (line.startsWith('5.')) {
        // Remove redundant "Main Characteristics:" and split items by '*'
        const characteristics = line.replace('5.', '').replace('Main Characteristics:', '').trim();
        data['Main Characteristics'] = characteristics.split('*').map(item => item.trim()).filter(Boolean).join(', ');
      } else if (line.startsWith('6.')) {
        // Remove redundant "Care Tips:" and split items by '*'
        const careTips = line.replace('6.', '').replace('Care Tips:', '').trim();
        data['Care Tips'] = careTips.split('*').map(item => item.trim()).filter(Boolean).join(', ');
      } else if (line.startsWith('7.')) {
        // Remove redundant "Interesting Facts:" and split items by '*'
        const facts = line.replace('7.', '').replace('Interesting Facts:', '').trim();
        data['Interesting Facts'] = facts.split('*').map(item => item.trim()).filter(Boolean).join(', ');
      }
    });

    return data;
  };

  const plantData = parseInfo(info);

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full mx-auto mt-8 border border-green-200">
      {/* Plant Image */}
      {imageUrl && (
        <div className="mb-6">
          <img src={imageUrl} alt="Plant" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      )}

      <h2 className="text-4xl font-bold mb-6 text-green-800 text-center">🌿 Plant Information 🌿</h2>

      {/* Description */}
      <p className="text-lg text-gray-800 mb-6 text-center">
        Explore detailed information about the plant, including its characteristics, care tips, and interesting facts.
      </p>

      {/* More About Plants Section */}
      <section className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Characteristic</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(plantData).map(([key, value]) => (
              
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value || 'Not Available'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PlantInfo;
